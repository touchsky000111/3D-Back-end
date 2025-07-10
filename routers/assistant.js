const { getUserObjectId } = require("../lib/auth")
const assistantController = require("../controller/assistant.controller")
const vapiController = require("../controller/vapi.controller")
const AssistantModelSchema = require("../model/assistants.model")
const config = require("../config/index")
const UserModelSchema = require("../model/users")
const PaymentModelSchema = require("../model/payment.model")
const { free } = require("../lib/etc")


module.exports = async (fastify, opts) => {
    fastify.addHook('preHandler', fastify.authenticate);

    fastify.get('/getassistant', async (req, res) => {
        try {
            console.log("assistant ...")
            const accessToken = req.headers.authorization.split(" ")[1]
            const vapiKey = await vapiController.getVapiKeyWithAccessToken(accessToken)

            const allAssistants = await assistantController.getAssistant(vapiKey)
            const userAssistantIds = await AssistantModelSchema.find({ userId: await getUserObjectId(accessToken) })
            const result = allAssistants.filter(assistant => userAssistantIds.some(userAssistant => userAssistant.assistantId === assistant.id))
            return result
        } catch (err) {
            console.log("err => ", err)
        }
    });

    fastify.post("/update-assistant", async (req, res) => {
        try {
            const updateData = req.body
            console.log("updateData => ", updateData)
            const accessToken = req.headers.authorization.split(" ")[1]
            const vapiKey = await vapiController.getVapiKeyWithAccessToken(accessToken)

            const result = await assistantController.updateAssistant(updateData, vapiKey)
            console.log("assitant update result => ", result)
            return result
        } catch (err) {
            console.log("err => ", err)
        }
    })

    fastify.post("/create-assistant", async (req, res) => {
        try {
            const accessToken = req.headers.authorization.split(" ")[1]
            const isPremium = await assistantController.checkPremium({ accessToken })
            const userId = await getUserObjectId(accessToken)
            const user = await UserModelSchema.findOne({ _id: userId })
            const email = user.email
            console.log("userId => ", userId)
            console.log("isPremium => ", isPremium)

            const isAvailableToCreateAssistant = await assistantController.isAvailableToCreateAssistant({ isPremium, userId })

            console.log("isAvailableToCreateAssistant => ", isAvailableToCreateAssistant)

            if (isAvailableToCreateAssistant == false) {
                if (isPremium == free) {
                    return res.code(400).send({ message: "You can not create assistant in Free version" })
                }
                else {
                    return res.code(400).send({ message: `You have reached the maximum number of assistants for ${isPremium} plan` })
                }
            }


            if (config.testmode == false) {
                console.log("assistant ...")
                const { name, firstMessage, endCallMessage, voiceId } = req.body
                console.log("accessToken => ", accessToken)
                console.log("name => ", name)
                console.log("firstMessage => ", firstMessage)
                console.log("endCallMessage => ", endCallMessage)
                console.log("voiceId => ", voiceId)
                const vapiKey = await vapiController.getVapiKeyWithAccessToken(accessToken)
                const result = await assistantController.createAssistant({ vapiKey, name, firstMessage, endCallMessage, voiceId })
                console.log("result => ", result)
                const newAssistant = new AssistantModelSchema({
                    userId: userId,
                    assistantId: result.id,
                    assistantName: name,
                    email: email
                })
                await newAssistant.save()
                return result
            } else {
                const newAssistant = new AssistantModelSchema({
                    userId: userId,
                    assistantId: "1234567890",
                    assistantName: "Test Assistant",
                    email: email
                })
                await newAssistant.save()
                return {
                    id: "1234567890",
                    name: "Test Assistant",
                    firstMessage: "Hello, how can I help you today?",
                    endCallMessage: "Thank you for calling!",
                    voiceId: "1234567890"
                }
            }

        } catch (error) {
            console.log("err >>> ", error)
            res.code(500).send({ message: "Internal server error" })
        }
    })

    fastify.post("/check-premium", async (req, res) => {
        try {
            const accessToken = req.headers.authorization.split(" ")[1]
            const userId = await getUserObjectId(accessToken)

            const paymentModel = await PaymentModelSchema.find({ userId: userId })
            console.log("paymentModel >>> ", paymentModel)


            res.code(200).send({ message: "Premium user" })
        } catch (error) {
            console.log("err >>> ", error)
        }
    })
}