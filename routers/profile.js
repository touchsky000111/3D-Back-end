const { get_user } = require("../controller/mongoose.controller")
const { updateProfile, getProfile } = require("../controller/profile.controller")
const PaymentModelSchema = require('../model/payment.model')
const SubscriptionModelSchema = require('../model/subscription.model')

module.exports = async (fastify, opts) => {
    fastify.addHook('preHandler', fastify.authenticate);
    fastify.post('/me', async (req, res) => {
        try {
            const { id } = req.body
            console.log(
                "id => ", id
            )
            const user = await getProfile(id)
            const paymentModel = await PaymentModelSchema.find({ userId: id })

            let plan = "Free"
            const subscriptionModel = await SubscriptionModelSchema.findOne({ userId: id })
            console.log("subscriptionModel => ", subscriptionModel)

            if (subscriptionModel) {
                plan = subscriptionModel.subscriptionType
            }

            res.code(200).send({ email: user.email, fullName: user.fullName, companyName: user.companyName, avatar: user.avatar, plan, role: user.role })
        } catch (err) {
            res.code(500).send({ msg: "failed get profile" })
        }
    })

    fastify.post('/update-profile', async (req, res) => {
        try {
            const { id, password, currentPassword, fullName, companyName, avatar } = req.body
            console.log(id, password, currentPassword, fullName, companyName)
            const result = await updateProfile({ id, password, currentPassword, fullName, companyName, avatar })
            console.log("result => ", result)
            if (result !== true) res.code(401).send({ msg: result })
            else return result

        } catch (err) {
            res.code(401).send({ msg: "failed update profile" })
        }
    })
}