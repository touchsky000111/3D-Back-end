const { authenticate } = require('@google-cloud/local-auth');
const { google } = require('googleapis');
const path = require('path');
const { send_verify_code, verify_code, reset_password, verify_reset_password, generate_new_password } = require("../controller/emailjs.controller")
const userModel = require("../model/users")
const emailVerifyModel = require("../model/email.verify");
const { login } = require('../controller/mongoose.controller');
const { handleGoogleAuth, generateTokens } = require('../controller/auth.controller');
const vapiKeyModel = require('../model/vapikey.model')
const config = require('../config/index')
const twilioController = require('../controller/twilio.controller')
const vapiController = require("../controller/vapi.controller");
const assistantController = require("../controller/assistant.controller")
const twilioModel = require('../model/twilio.model');
const { generateHashedPassword } = require('../lib/auth');

module.exports = async (fastify) => {
    // Public routes
    fastify.get("/", async (req, res) => {
        return { msg: "hi" }
    });

    fastify.post("/register", async (req, res) => {

        console.log("register")
        console.log(req.body)
        // const { email, password, fullName, companyName } = req.body
        // const result = await send_verify_code({ email, password, fullName, companyName })
        // if (result === true) return true
        // else return false
        return { msg: "register" }
    })

    fastify.post("/reset-password", async (req, res) => {
        const { email } = req.body
        console.log("email => ", email)
        const result = await reset_password({ email })
        if (result === true) return true
        else return false
    })

    fastify.post("/generate-new-password", async (req, res) => {
        const { email, password } = req.body
        console.log("email => ", email)
        console.log("password => ", password)
        const result = await generate_new_password({ email, password })
        if (result === true) return true
        else return false
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

    fastify.post("/admin/login", async (req, res) => {
        try {
            const { email, password } = req.body;
            
            // Find admin user
            const admin = await userModel.findOne({ email, role: 'admin' });
            if (!admin) {
                return res.code(401).send({ error: 'Invalid admin credentials' });
            }

            // Verify password
            const hashedPassword = await generateHashedPassword(password);
            if (admin.password !== hashedPassword) {
                return res.code(401).send({ error: 'Invalid admin credentials' });
            }

            // Generate tokens
            const tokens = generateTokens(admin);
            
            return res.code(200).send({
                success: true,
                ...tokens,
                user: {
                    id: admin._id,
                    email: admin.email,
                    name: admin.fullName,
                    role: admin.role
                }
            });
        } catch (error) {
            console.error('Admin login error:', error);
            return res.code(500).send({ error: 'Internal server error' });
        }
    });

    // Google OAuth routes
    fastify.post('/google', async (request, reply) => {
        try {
            console.log('=== Google Auth Request ===');
            console.log('Headers:', request.headers);
            console.log('Body:', request.body);

            const { email, name, googleId, image } = request.body

            // Validate required fields
            if (!email || !googleId) {
                console.log('Missing required fields:', { email, googleId });
                return reply.status(400).send({
                    success: false,
                    error: 'Email and Google ID are required'
                })
            }

            console.log('Calling handleGoogleAuth with:', { email, name, googleId, image });

            // Handle Google authentication
            const result = await handleGoogleAuth({ email, name, googleId, image });
            console.log('Google auth result:', result);

            return result;

        } catch (error) {
            console.error('=== Google Auth Error ===');
            console.error('Error details:', error);
            console.error('Stack trace:', error.stack);
            return reply.status(500).send({
                success: false,
                error: 'Internal server error',
                details: error.message
            })
        }
    })

    // Protected routes
    fastify.get("/me", {
        preHandler: fastify.authenticate
    }, async (request, reply) => {
        return { user: request.user }
    });

    // Admin only route
    fastify.get("/admin", {
        preHandler: fastify.authenticateWithRole(['admin'])
    }, async (request, reply) => {
        return { message: 'Admin access granted' }
    });

    // Optional auth route
    fastify.get("/public-or-private", {
        preHandler: fastify.optionalAuth
    }, async (request, reply) => {
        if (request.user) {
            return { message: 'Authenticated user', user: request.user }
        }
        return { message: 'Public access' }
    });
}
