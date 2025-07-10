const axios = require("axios")
const config = require("../config/index")
const VapiKeyModel = require("../model/vapikey.model")
const { getUserObjectId } = require("../lib/auth")

exports.getAssistantPhoneNumber = async ({ vapiKey }) => {
    try {
        const response = await axios.get(
            `https://api.vapi.ai/phone-number/`,
            {
                headers: {
                    Authorization: `Bearer ${vapiKey}`,
                    "Content-Type": "application/json"
                },
            }
        );

        return response.data
    } catch (error) {
        console.error("Failed to fetch call details:", error.response ? error.response.data : error.message);
    }
}


exports.getCallLogsEnded = async (vapiKey) => {
    try {
        const response = await axios.get(
            "https://api.vapi.ai/call/",
            {
                headers: {
                    Authorization: `Bearer ${vapiKey}`,
                    "Content-Type": "application/json"
                },
            }
        );

        // Assume response.data is an array of call objects
        const calls = Array.isArray(response.data) ? response.data : response.data.results || [];

        // Filter for calls that have customer.number
        const filteredCalls = calls.filter(
            call => call.customer && typeof call.customer.number === "string" && call.customer.number.trim() !== ""
        );
        console.log(">>>> data loaded >>>>")
        return filteredCalls
    } catch (error) {
        console.error("Failed to fetch call details:", error.response ? error.response.data : error.message);
    }
}

exports.getVapiFileList = async () => {
    try {
        const response = await axios.get('https://api.vapi.ai/file', {
            headers: {
                'Authorization': `Bearer ${vapiKey}`,
            },
        })

        return response.data
    } catch (err) {
        console.error("Failed to get filelist details:", error.response ? error.response.data : error.message);
    }
}

exports.deleteFileVapi = async (fileId) => {
    try {
        const response = await axiosdelete(`https://api.vapi.ai/file/${fileId}`,
            {
                headers: {
                    Authorization: `Bearer ${config.VAPI_APIKEY}`,
                    "Content-Type": "application/json"
                },
            }
        );

        // Assume response.data is an array of call objects
        console.log(">>>> deleted >>>>")
        return true
    } catch (err) {
        console.error("err => ", err);
    }
}

exports.getFileIdWithName = async (fileName, vapiKey) => {
    try {
        const result = await this.getVapiFileList(vapiKey)
        const data = result.data
        const found = data.find(item => item.name === fileName);
        console.log(found);
        return found.id
    } catch (err) {
        console.log("err => ", err)
    }
}

exports.setVapiKey = async ({ userId, vapiKey }) => {
    try {
        const result = await VapiKeyModel.create({ userId, vapiKey });
        return result;
    } catch (err) {
        console.log("err => ", err)
    }
}

exports.getVapiKeyWithUserId = async (userId) => {
    try {
        const result = await VapiKeyModel.findOne({ userId });
        return result.vapiKey;
    } catch (err) {
        console.log("err => ", err)
    }
}

exports.getVapiKeyWithAccessToken = async (accessToken) => {
    try {
        const userId = await getUserObjectId(accessToken)
        const vapiKey = await this.getVapiKeyWithUserId(userId)
        return vapiKey
    } catch (err) {
        console.log("err => ", err)
    }
}

exports.connectPhoneNumberToVapi = async ({ number, twilioAccountSid, twilioAuthToken, assistantId, vapiKey }) => {
    try {

        console.log("vapiKey => ", vapiKey)
        console.log("number => ", number)
        console.log("twilioAccountSid => ", twilioAccountSid)
        console.log("twilioAuthToken => ", twilioAuthToken)
        console.log("assistantId => ", assistantId)
        const response = await axios.post(
            'https://api.vapi.ai/phone-number',
            {
                provider: "twilio",
                number: number,
                twilioAccountSid: twilioAccountSid,
                twilioAuthToken: twilioAuthToken,
                assistantId: assistantId
            },
            {
                headers: {
                    Authorization: `Bearer ${vapiKey}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        console.log("response => ", response.data)
        return response.data
    } catch (error) {
        console.error("Failed to fetch call details:", error.response ? error.response.data : error.message);
        return error.response ? error.response.data : error.message
    }
}


exports.getAssistantPhoneNumberWithAssistantId = async ({ assistantId, phoneNumbers }) => {
    try {

        console.log("assistantId => ", assistantId)
        console.log("phoneNumbers => ", phoneNumbers)

        const response = phoneNumbers.find(phoneNumber => phoneNumber.assistantId === assistantId)
        console.log("response => ", response)
        return response
    } catch (err) {
        console.log("err => ", err)
    }
}


exports.getPhonenumberWithPhoneNumberId = async ({ phoneNumbers, phoneNumberId }) => {
    try {
        const response = phoneNumbers.find(phoneNumber => phoneNumber.id === phoneNumberId)
        console.log("response => ", response)
        return response
    } catch (err) {
        console.log("err => ", err)
    }
}