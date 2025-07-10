const { authenticate } = require('@google-cloud/local-auth');
const userModel = require("../model/users.model")
const { regist_user, login } = require('../controller/mongoose.controller');
const config = require('../config/index')
const { generateHashedPassword } = require('../lib/auth');

module.exports = async (fastify) => {
    // Public routes
    fastify.get("/", async (req, res) => {
        return { msg: "hi" }
    });

    fastify.post("/register", async (req, reply) => {
        try {
            console.log("register")
            console.log(req.body)
            const signUpData = req.body
            await regist_user(signUpData)
            return reply.code(200).send({
                msg: true
            })
        } catch (err) {
            console.error('err => ', err)
            return reply.code(500).send({
                msg: false
            });
        }

    })

    fastify.post("/verify-reset-password", async (req, res) => {
        const { email, code } = req.body
        const result = await verify_reset_password({ email, code })
        if (result === true) return true
        else return false
    })

    fastify.post("/verify", async (req, res) => {
        const vapiKey = config.VAPI_KEY
        console.log("vapi key => ", vapiKey)


        const { email, code } = req.body

        console.log("email => ", email)
        console.log("code => ", code)
        const result = await verify_code({ email, code })
        console.log("Verify Result => ", result)
        if (result == true) {

            const emailVerifyResult = await emailVerifyModel.findOne({ email })
            const saveUser = new userModel({
                email: email,
                password: emailVerifyResult.password,
                fullName: emailVerifyResult.fullName,
                companyName: emailVerifyResult.companyName,
                authProvider: 'local',

            })

            //Create twilio sub account
            const resultOfTwilioSubAccount = await twilioController.createTwilioSubAccount({ userId: saveUser._id, email: email })
            if (resultOfTwilioSubAccount == false) {
                console.log("twilio account creation failed")
                res.code(400).send({ error: "twilio account creation failed" })
                return false
            }

            console.log("twilio account created")

            //Regist Vapi key for every user
            console.log("verified !!!! ", saveUser._id)
            const vapiKeyResult = new vapiKeyModel({ email: email, userId: saveUser._id, vapiKey: vapiKey })
            await vapiKeyResult.save()
            console.log("saved!!!")

            await saveUser.save()

            res.code(200).send({ message: "Verified" })
        }
        else res.code(400).send({ error: "Invalid code" })
    })

    fastify.post("/login", async (req, res) => {
        const { email, password } = req.body
        const access_token = await login({ email, password })
        console.log("token => ", access_token)
        if (access_token.accessToken) return access_token
        else res.code(400).send({ error: access_token })
    })

}
