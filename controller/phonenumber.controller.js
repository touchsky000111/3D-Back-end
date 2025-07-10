const config = require("../config/index")
const axios = require("axios");
const assistant = require("../routers/assistant");
const Active_Calls_Model = require("../model/active.calls.model");
const twilioController = require("./twilio.controller");
const PhonenumberModelSchema = require("../model/phonenumber.model");
const { free, starter, pro, scale } = require("../lib/etc")
const { getUserObjectId } = require("../lib/auth")
const PaymentModelSchema = require("../model/payment.model")
const twilio = require("twilio");
const twilioModel = require("../model/twilio.model");

exports.getPhoneNumbers = async (vapiKey) => {
    try {
        const response = await axios.get(
            "https://api.vapi.ai/phone-number/",
            {
                headers: {
                    Authorization: `Bearer ${vapiKey}`,
                    "Content-Type": "application/json"
                },
            }
        );

        // Assume response.data is an array of call objects
        return response.data
        // return "Rate limit exceeded"
    } catch (error) {
        console.error("Failed to get Phone Number details:", error.response ? error.response.data : error.message);
        return error.response ? error.response.data : error.message
    }
}


exports.makeCall = async ({ customer, vapiKey, phoneNumber, assistantId, userId }) => {
    try {
        console.log("cusomer >>> ", customer)
        console.log("phoneNumber >>> ", phoneNumber)
        console.log("assistantId >>> ", assistantId)
        console.log("vapiKey >>> ", vapiKey)
        const twilioAccountSid = await twilioController.getTwilioAccountSid({ userId })

        console.log("twilioAccountSid >>> ", twilioAccountSid)


        const response = await axios.post(
            'https://api.vapi.ai/call',
            {
                phoneNumber: {
                    twilioPhoneNumber: phoneNumber,
                    twilioAccountSid: twilioAccountSid.accountSid,
                    twilioAuthToken: twilioAccountSid.accountAuthToken
                },
                customer: { number: customer },
                assistantId: assistantId, // Optional
            },
            {
                headers: {
                    Authorization: `Bearer ${vapiKey}`,
                    'Content-Type': 'application/json',
                },
            }
        );
        console.log('Call initiated:', response.data);
        return response.data
    } catch (error) {
        console.error("Failed to make call:", error.response ? error.response.data : error.message);
        return error.response ? error.response.data : error.message
    }
}

exports.makeCall_outBountCall_for_schedule_with_each_customer = async ({ customer, phoneNumberId, assistantId, vapiKey, phoneNumber }) => {
    try {
        // Check current active calls for this phone number
        const activeCalls = await Active_Calls_Model.countDocuments({ phoneNumberId });

        if (activeCalls >= 10) {
            console.log(`Phone number ${phoneNumberId} has reached maximum concurrent calls (10)`);
            return { error: "Maximum concurrent calls reached for this phone number" };
        }

        console.log("customer >>> ", customer);
        const response = await axios.post(
            'https://api.vapi.ai/call',
            {
                phoneNumberId: phoneNumberId,
                customer: { number: customer },
                assistantId: assistantId,
            },
            {
                headers: {
                    Authorization: `Bearer ${vapiKey}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        // Track the new call
        await Active_Calls_Model.create({
            phoneNumberId,
            phoneNumber,
            callId: response.data.id,
            customerNumber: customer
        });

        console.log('Call initiated:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error making call:', error);
        return { error: error.message };
    }
}

exports.updateAssistant = async ({ phoneNumberId, assistantId, vapiKey }) => {

    console.log("phoneNumberId => ", phoneNumberId)

    console.log("assistantId => ", assistantId)
    const response = await axios.patch(
        `https://api.vapi.ai/phone-number/${phoneNumberId}`,
        {
            assistantId: assistantId
        },
        {
            headers: {
                Authorization: `Bearer ${vapiKey}`,
                'Content-Type': 'application/json',
            },
        }
    )
    return response.data
}

// Add function to remove call from tracking when it ends
exports.removeActiveCall = async (callId) => {
    try {
        await Active_Calls_Model.deleteOne({ callId });
    } catch (error) {
        console.error('Error removing active call:', error);
    }
}



exports.checkPremium = async ({ accessToken }) => {
    try {
        const userId = await getUserObjectId(accessToken)
        const paymentModel = await PaymentModelSchema.find({ userId })
        let plan = free

        console.log("paymentModel => ", paymentModel)
        if (paymentModel.length > 0) {
            const lastPayment = paymentModel[paymentModel.length - 1]
            plan = lastPayment.plan
        }
        return plan
    } catch (error) {
        console.log("error => ", error)
    }
}


exports.isAvailableToCreatePhoneNumber = async ({ isPremium, userId }) => {
    try {
        const phonenumberModel = await PhonenumberModelSchema.find({ userId })
        console.log("phonenumberModel => ", phonenumberModel)
        const numberOfPhoneNumbers = phonenumberModel.length

        if (isPremium == free) {
            return false
        }


        if (isPremium == starter) {
            if (numberOfPhoneNumbers >= 1) {
                return false
            } else {
                return true
            }
        }


        if (isPremium == pro) {
            if (numberOfPhoneNumbers >= 2) {
                return false
            } else {
                return true
            }
        }


        if (isPremium == scale) {
            if (numberOfPhoneNumbers >= 5) {
                return false
            } else {
                return true
            }
        }


    } catch (error) {
        console.log("error => ", error)
    }
}

exports.getVerificationCode = async ({ userId, phoneNumber }) => {
    try {

        const twilioAccount = await twilioModel.findOne({ userId })
        const accountSid = twilioAccount.accountSid;
        const authToken = twilioAccount.accountAuthToken;
        const client = twilio(accountSid, authToken);
        const validationRequest = await client.validationRequests.create({
            friendlyName: "My Home Phone Number",
            phoneNumber: phoneNumber,
            statusCallback: `${config.TWILIO_CALLBACK_URL}/webhook/verify-phone-number-callback`,
        });

        console.log(validationRequest.validationCode);

        return { verifyCode: validationRequest.validationCode };
    } catch (error) {
        console.error("Failed to get verification code:", error.response ? error.response.data : error.message);
        return error.response ? error.response.data : error.message;
    }
}