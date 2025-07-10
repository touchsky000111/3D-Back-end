
const phoneNumberController = require("../controller/phonenumber.controller")
const leadController = require("../controller/lead.controller")
const vapiController = require("../controller/vapi.controller")
const twilioController = require("../controller/twilio.controller")
const twilioModel = require("../model/twilio.model")
const assistantController = require("../controller/assistant.controller")
const PhoneNumberModelSchema = require("../model/phonenumber.model")
const { getUserObjectId } = require("../lib/auth")
const AssistantModelSchema = require("../model/assistants.model")
const config = require("../config/index")
const UserModelSchema = require("../model/users")
const { free } = require("../lib/etc")
const phonenumberModel = require("../model/phonenumber.model")

module.exports = async (fastify, opts) => {
    fastify.addHook('preHandler', fastify.authenticate);

    fastify.get('/getphonenumber', async (req, res) => {
        try {
            console.log("phone ...")
            const accessToken = req.headers.authorization.split(" ")[1]
            const vapiKey = await vapiController.getVapiKeyWithAccessToken(accessToken)
            const allPhoneNumbers = await phoneNumberController.getPhoneNumbers(vapiKey)
            const userId = await getUserObjectId(accessToken)
            const userPhoneNumbers = await PhoneNumberModelSchema.find({ userId })
            let result = []

            console.log("allPhoneNumbers => ", allPhoneNumbers)
            console.log("userPhoneNumbers => ", userPhoneNumbers)

            for (let i = 0; i < allPhoneNumbers.length; i++) {
                for (let j = 0; j < userPhoneNumbers.length; j++) {
                    if (allPhoneNumbers[i].number === userPhoneNumbers[j].phoneNumber) {
                        result.push(allPhoneNumbers[i])
                    }
                }
            }
            console.log("result => ", result)
            res.code(200).send(result)
        } catch (err) {
            console.log("err => ", err)
            res.code(400).send({ error: "Failed to get phone numbers" })
        }
    });


    fastify.post("/makecall", async (req, res) => {
        try {
            const { customer } = req.body
            console.log("call ....", customer)
            const accessToken = req.headers.authorization.split(" ")[1]
            const userId = await getUserObjectId(accessToken)
            const vapiKey = await vapiController.getVapiKeyWithAccessToken(accessToken)

            const userPhoneNumbers = await PhoneNumberModelSchema.find({ userId })
            const userAssistants = await AssistantModelSchema.find({ userId })
            const phoneNumber = userPhoneNumbers[0].phoneNumber
            const assistantId = userAssistants[0].assistantId

            const result = await phoneNumberController.makeCall({ customer, vapiKey, assistantId, phoneNumber, userId })

            return result
        } catch (err) {
            console.log("err => ", err)
        }
    })

    fastify.post("/bulk-call", async (req, res) => {
        try {
            const { userId } = req.body
            const accessToken = req.headers.authorization.split(" ")[1]
            const vapiKey = await vapiController.getVapiKeyWithAccessToken(accessToken)
            const customer = await leadController.getAllLeads({ userId })
            console.log("customer => ", customer)

            await customer.map(async (item) => {
                const result = await phoneNumberController.makeCall({ customer: item.phone, vapiKey })
                console.log("result => ", result)
            })
            // const result = await phoneNumberController.makeCall({ customer })
            return "ok"
        } catch (err) {
            console.log("err => ", err)
        }
    })



    fastify.post("/update_phonenumber", async (req, res) => {
        try {
            const { phoneNumberId, assistantId } = req.body
            const accessToken = req.headers.authorization.split(" ")[1]
            const vapiKey = await vapiController.getVapiKeyWithAccessToken(accessToken)
            const result = await phoneNumberController.updateAssistant({ phoneNumberId, assistantId, vapiKey })
            return result
        } catch (err) {
            console.log("err => ", err)
        }
    })

    fastify.post("/purchase-phonenumber", async (req, res) => {

        console.log("purchase-phonenumber ...")

        try {
            const accessToken = req.headers.authorization.split(" ")[1]
            const userId = await getUserObjectId(accessToken)
            const vapiKey = await vapiController.getVapiKeyWithAccessToken(accessToken)
            const user = await UserModelSchema.findOne({ _id: userId })
            const email = user.email

            const isPremium = await phoneNumberController.checkPremium({ accessToken })
            console.log("userId => ", userId)
            console.log("isPremium => ", isPremium)

            const isAvailableToCreatePhoneNumber = await phoneNumberController.isAvailableToCreatePhoneNumber({ isPremium, userId })

            console.log("isAvailableToCreatePhoneNumber => ", isAvailableToCreatePhoneNumber)

            if (isAvailableToCreatePhoneNumber == false) {
                if (isPremium == free) {
                    return res.code(400).send({ message: "You can not create Phone Number in Free version" })
                }
                else {
                    return res.code(400).send({ message: `You have reached the maximum number of Phone Numbers for ${isPremium} plan` })
                }
            }


            if (config.testmode == false) {
                //Create the Phone number from sub account of twilio
                const resultOfTwilioPhoneNumber = await twilioController.createDefaultPhoneNumber({ userId })
                if (resultOfTwilioPhoneNumber == false) {
                    console.log("twilio phone number creation failed")
                    res.code(400).send({ error: "twilio phone number creation failed" })
                    return false
                }

                console.log("twilio phone number created")


                //Connect the Phone number of subaccount of twilio to Vapi account
                const twilioAccount = await twilioModel.findOne({ userId })

                const twilioNumbers = await twilioController.getPhoneNumberFromTwilio({ accountSid: twilioAccount.accountSid, authToken: twilioAccount.accountAuthToken })
                const userNumbers = await PhoneNumberModelSchema.find({ userId })

                let newNumber = null

                if (userNumbers.length > 0) {
                    console.log("userNumbers => ", userNumbers)
                    let isNewNumber = false
                    for (let i = 0; i < twilioNumbers.length; i++) {
                        for (let j = 0; j < userNumbers.length; j++) {
                            if (twilioNumbers[i].phoneNumber != userNumbers[j].phoneNumber) {
                                newNumber = twilioNumbers[i]
                                isNewNumber = true
                            }
                        }
                    }

                    if (isNewNumber == false) {
                        res.code(400).send({ error: "Phone number already connected to another assistant" })
                        return false
                    }
                } else {
                    newNumber = twilioNumbers[0]
                }

                console.log("newNumber => ", newNumber)

                const allAssistants = await assistantController.getAssistant(vapiKey)
                const userAssistantIds = await AssistantModelSchema.find({ userId })
                const myAssistant = allAssistants.filter(assistant => userAssistantIds.some(userAssistant => userAssistant.assistantId === assistant.id))

                if (myAssistant.length > 0) {
                    const resultOfConnectPhoneNumberToVapi = await vapiController.connectPhoneNumberToVapi({
                        number: newNumber.phoneNumber,
                        twilioAccountSid: twilioAccount.accountSid,
                        twilioAuthToken: twilioAccount.accountAuthToken,
                        assistantId: myAssistant[0].id,
                        vapiKey
                    })

                    console.log("resultOfConnectPhoneNumberToVapi => ", resultOfConnectPhoneNumberToVapi)
                    if (resultOfConnectPhoneNumberToVapi.statusCode == 400) {
                        res.code(400).send({ error: "Phone number already connected to another assistant" })
                    }
                    const newPhoneNumber = new PhoneNumberModelSchema({
                        userId: userId,
                        phoneNumber: newNumber.phoneNumber,
                        assistantId: myAssistant[0].id,
                        email: email,
                        phoneNumberId: resultOfConnectPhoneNumberToVapi.id
                    })
                    await newPhoneNumber.save()

                    console.log("newPhoneNumber saved => ")
                    return newPhoneNumber

                } else {
                    console.log("No assistant found")
                    res.code(400).send({ error: "No assistant found" })
                }
            } else {
                const newPhoneNumber = new PhoneNumberModelSchema({
                    userId: userId,
                    phoneNumber: "1234567890",
                    assistantId: "1234567890",
                    email: email
                })
                await newPhoneNumber.save()

                return newPhoneNumber
            }
        } catch (err) {
            console.log("err => ", err)
            res.code(400).send({ message: "Failed to purchase phone number" })
        }

    })


    fastify.post("/get-verification-code", async (req, res) => {
        try {
            const { phoneNumber } = req.body
            const accessToken = req.headers.authorization.split(" ")[1]
            const userId = await getUserObjectId(accessToken)
            console.log("phone number => ", phoneNumber)
            console.log("access token => ", accessToken)

            const result = await phoneNumberController.getVerificationCode({ phoneNumber, userId })
            // return result
            return result
        } catch (err) {
            console.log("err => ", err)
            res.code(400).send({ error: "Failed to get verification code" })
        }
    })

    fastify.post("/verify-phone-number", async (req, res) => {
        try {
            const { phoneNumber } = req.body
            const accessToken = req.headers.authorization.split(" ")[1]
            const userId = await getUserObjectId(accessToken)

            console.log("phone number => ", phoneNumber)
            const result = await phonenumberModel.findOne({ phoneNumber, userId })
            console.log("result => ", result)
            if (result) {
                return true
            }

            return false
        } catch (err) {
            console.log("err => ", err)
            res.code(400).send({ error: "Failed to verify phone number" })
        }
    })

}