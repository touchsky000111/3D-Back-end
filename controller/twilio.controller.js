const userModel = require("../model/users")
const mongooseController = require("./mongoose.controller")
const authLib = require("../lib/auth")
const twilio = require("twilio");
const config = require("../config/index")
const twilioModel = require("../model/twilio.model")
exports.createTwilioSubAccount = async ({ userId, email }) => {

    try {
        if (config.testmode == false) {
            console.log("create twilio sub account")
            const accountSid = config.TWILIO_ACCOUNT_SID;
            const authToken = config.TWILIO_AUTH_TOKEN;
            const client = twilio(accountSid, authToken);

            const account = await client.api.accounts.create({
                friendlyName: email
            });
            console.log("account => ", account)
            // console.log(`Subaccount SID: ${account.sid}`);
            // console.log(`Auth Token: ${account.authToken}`);
            const subAccountSid = account.sid
            const subAccountAuthToken = account.authToken

            // const subAccountSid= "AC00000000000000000000000000000000"
            // const subAccountAuthToken = "00000000000000000000000000000000"
            const twilioSubAccount = new twilioModel({
                userId: userId,
                email: email,
                accountSid: subAccountSid,
                accountAuthToken: subAccountAuthToken
            })
            await twilioSubAccount.save()
            return true

        } else {

            const twilioSubAccount = new twilioModel({
                userId: userId,
                email: email,
                accountSid: "AC00000000000000000000000000000000",
                accountAuthToken: "00000000000000000000000000000000"
            })
            await twilioSubAccount.save()
            return true
            
        }
    } catch (error) {
        console.log("error => ", error)
        return false
    }
}

exports.createDefaultPhoneNumber = async ({ userId }) => {
    try {

        console.log("user Id => ", userId)
        const mainAccountSid = config.TWILIO_ACCOUNT_SID;      // Your main account SID
        const mainAuthToken = config.TWILIO_AUTH_TOKEN;       // Your main auth token
        // const subaccountSid = "AC696428990c8a86e7ab7100bc22752e7e";   // The subaccount SID

        const twilioAccount = await twilioModel.findOne({ userId: userId })
        console.log("subaccountSid => ", twilioAccount)
        // Create a client scoped to the subaccount by passing the subaccountSid option
        const client = twilio(mainAccountSid, mainAuthToken, { accountSid: twilioAccount.accountSid });


        async function searchNumbers() {
            const numbers = await client.availablePhoneNumbers('US').local.list({ limit: 5 });
            console.log(numbers);
            return numbers
        }


        async function buyNumber(phoneNumber) {
            const purchasedNumber = await client.incomingPhoneNumbers.create({
                phoneNumber: phoneNumber
            });
            console.log(`Purchased number SID: ${purchasedNumber.sid}`);
        }

        const phoneNumberlist = await searchNumbers();

        // Replace with a phone number from the search results
        await buyNumber(phoneNumberlist[0].phoneNumber);
        console.log("phone number purchased")
        return true
    } catch (error) {
        console.log("err => ", error)
        return false
    }
}


exports.getPhoneNumberFromTwilio = async ({ accountSid, authToken }) => {
    console.log("Getting phone number from twilio")
    console.log("accountSid => ", accountSid)
    console.log("authToken => ", authToken)
    const client = require('twilio')(accountSid, authToken);

    const phoneNumbers = await client.incomingPhoneNumbers.list()

    console.log("Phone number => ", phoneNumbers)
    return phoneNumbers
}

exports.getTwilioAccountSid = async ({ userId }) => {
    const twilioAccount = await twilioModel.findOne({ userId: userId })
    return twilioAccount
}