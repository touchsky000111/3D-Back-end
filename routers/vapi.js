const vapiController = require("../controller/vapi.controller")
const { getUserObjectId } = require("../lib/auth")
const PhoneNumberModelSchema = require("../model/phonenumber.model")
const AssistantModelSchema = require("../model/assistants.model")


module.exports = async (fastify, opts) => {
    fastify.addHook('preHandler', fastify.authenticate);

    fastify.get('/call-history', async (req, res) => {

        try {

            const accessToken = req.headers.authorization.split(" ")[1]
            const userId = await getUserObjectId(accessToken)

            let callHistories = []

            const vapiKey = await vapiController.getVapiKeyWithAccessToken(accessToken)
            const result = await vapiController.getCallLogsEnded(vapiKey);

            const phoneNumbers = await PhoneNumberModelSchema.find({ userId })

            console.log("phoneNumbers", phoneNumbers)

            const responseData = await Promise.all(result.map(async (itm, idx) => {

                for (let i = 0; i < phoneNumbers.length; i++) {

                    if (itm.phoneNumber === undefined) continue

                    if (itm.phoneNumber.twilioPhoneNumber === phoneNumbers[i].phoneNumber)
                        return {
                            id: idx,
                            type: itm.type,
                            assistantPhoneNumber: itm.phoneNumber.twilioPhoneNumber,
                            customerPhoneNumber: itm.customer.number,
                            startedAt: itm.startedAt,
                            endedAt: itm.endedAt,
                            status: itm.status,
                            recordingUrl: itm.recordingUrl,
                            endedReason: itm.endedReason,
                            messages: itm.messages,
                            createdAt: itm.createdAt
                        }
                }
            })).then(results => results.filter(result => result !== undefined));

            res.code(200).send({ responseData });
        } catch (error) {
            console.log("error in call history", error)
            res.code(500).send({ error: error.message });
        }
    });


    fastify.post("/regist-vapi-key", async (req, res) => {
        try {
            const { userId, vapiKey } = req.body;
            const result = await vapiController.setVapiKey({ userId, vapiKey });
            res.code(200).send({ result });
        } catch (error) {
            console.log("error in vapi key", error)
            res.code(500).send({ error: error.message });
        }
    })
}