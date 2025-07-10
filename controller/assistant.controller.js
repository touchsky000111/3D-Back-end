const config = require("../config/index")
const axios = require("axios")
const PaymentModelSchema = require("../model/payment.model")
const { free, starter, pro, scale } = require("../lib/etc")
const { getUserObjectId } = require("../lib/auth")
const AssistantModelSchema = require("../model/assistants.model")
const SubScriptoinModelSchema = require("../model/subscription.model")

exports.getAssistant = async (vapiKey) => {
    try {
        const response = await axios.get(
            "https://api.vapi.ai/assistant/",
            {
                headers: {
                    Authorization: `Bearer ${vapiKey}`,
                    "Content-Type": "application/json"
                },
            }
        );
        // Assume response.data is an array of call objects
        return response.data
    } catch (error) {
        console.error("Failed to get Phone Number details:", error.response ? error.response.data : error.message);
        return error.response ? error.response.data : error.message
    }
}


exports.updateAssistant = async (updateData, vapiKey) => {
    try {
        const response = await axios.patch(
            `https://api.vapi.ai/assistant/${updateData.id}`,
            {
                firstMessage: updateData.firstMessage,
                endCallMessage: updateData.endCallMessage,
                name: updateData.name,
            },
            {
                headers: {
                    Authorization: `Bearer ${vapiKey}`,
                    "Content-Type": "application/json"
                },
            }
        )
        return response.data
    } catch (err) {
        console.log("err => ", err)
    }
}

exports.createAssistant = async ({ vapiKey, name, firstMessage, endCallMessage, voiceId }) => {
    try {
        const response = await axios.post("https://api.vapi.ai/assistant/", {
            name: name,
            model: {
                provider: "openai",
                model: "chatgpt-4o-latest"
            },
            voice: {
                provider: "vapi",
                voiceId: voiceId
            },
            firstMessage: firstMessage,
            endCallMessage: endCallMessage,
        },
            {
                headers: {
                    Authorization: `Bearer ${vapiKey}`,
                    "Content-Type": "application/json"
                },
            })
        return response.data
    } catch (error) {
        console.log("error => ", error)
        return error.response ? error.response.data : error.message
    }
}


exports.checkPremium = async ({ accessToken }) => {
    try {
        const userId = await getUserObjectId(accessToken)
        const subscription = await SubScriptoinModelSchema.findOne({ userId })
        return subscription.subscriptionType ? subscription.subscriptionType : free
    } catch (error) {
        console.log("error => ", error)
    }
}


exports.isAvailableToCreateAssistant = async ({ isPremium, userId }) => {
    try {
        const assistantModel = await AssistantModelSchema.find({ userId })
        console.log("assistantModel => ", assistantModel)
        const numberOfAssistants = assistantModel.length

        console.log("isPremium => ", isPremium)
        console.log("numberOfAssistants => ", numberOfAssistants)
        if (isPremium == free) {
            console.log("free")
            return false
        }


        if (isPremium == starter) {
            if (numberOfAssistants >= 1) {
                console.log("starter")
                return false
            } else {
                console.log("starter")
                return true
            }
        }


        if (isPremium == pro) {
            if (numberOfAssistants >= 2) {
                console.log("pro")
                return false
            } else {
                console.log("pro")
                return true
            }
        }


        if (isPremium == scale) {
            if (numberOfAssistants >= 5) {
                console.log("scale")
                return false
            } else {
                console.log("scale")
                return true
            }
        }


    } catch (error) {
        console.log("error => ", error)
    }
}