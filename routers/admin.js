const { getUserObjectId } = require("../lib/auth")
const assistantController = require("../controller/assistant.controller")
const vapiController = require("../controller/vapi.controller")
const AssistantModelSchema = require("../model/assistants.model")
const config = require("../config/index")
const UserModelSchema = require("../model/users")
const PaymentModelSchema = require("../model/payment.model")
const { free } = require("../lib/etc")
const subscriptionModel = require("../model/subscription.model")


module.exports = async (fastify, opts) => {
    fastify.addHook('preHandler', fastify.authenticateWithRole(['admin']));

    fastify.post("/is_admin", async (req, res) => {
        try {
            const accessToken = req.headers.authorization.split(" ")[1]
            const userId = await getUserObjectId(accessToken)
            const user = await UserModelSchema.findById(userId)
            if (user.role == "admin") {
                return res.code(200).send({ message: "Admin" })
            } else {
                return res.code(400).send({ message: "Not admin" })
            }
        } catch (error) {
            console.log("err >>> ", error)
        }
    })

    fastify.post("/get-all-users", async (req, res) => {
        try {
            const users = await UserModelSchema.find({})

            const result = users.map(user => {
                return {
                    _id: user._id,
                    email: user.email,
                    fullName: user.fullName,
                    companyName: user.companyName,
                    avatar: user.avatar,
                    createdAt: user.createdAt,
                    updatedAt: user.updatedAt,
                    role: user.role,
                    status: user.status
                }
            })
            return res.code(200).send(result)
        } catch (error) {
            console.log("err >>> ", error)
        }
    })

    fastify.post("/get-all-assitants", async (req, res) => {
        try {
            const assistants = await AssistantModelSchema.find({})

            return res.code(200).send(assistants)
        } catch (error) {
            console.log("err >>> ", error)
        }
    })

    fastify.post("/get-all-subscription-users", async (req, res) => {
        try {
            const subscription_users = await subscriptionModel.find({})
            const users = await UserModelSchema.find({})

            const result = users.map(item => {
                return {
                    fullName: item.fullName,
                    companyName: item.companyName,
                    avatar: item.avatar,
                    role: item.role,
                    email: item.email,
                    createdAt: item.createdAt,
                    updatedAt: item.updatedAt,
                    subscriptionType: subscription_users.find(sub => sub.userId.toString() === item._id.toString()) ?
                        subscription_users.find(sub => sub.userId.toString() === item._id.toString()).subscriptionType :
                        "free"
                }
            })

            console.log("subscription => ", result)
            return res.code(200).send(result)
        } catch (err) {
            console.log('err => ', err)
        }
    })
}