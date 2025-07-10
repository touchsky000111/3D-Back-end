const config = require("../config/index")
const axios = require("axios")
const mongooseController = require("../controller/mongoose.controller")
const googleMeetingController = require("../controller/meeting.controller")
module.exports = async (fastify) => {

    fastify.post("/save_google_meet_integration", async (req, res) => {
        try {
            const { userId, code } = req.body
            console.log("meeting integration => ", userId, code)
            const result = await googleMeetingController.saveGoogleMeetIntegration({ userId, code })
            if (result == false) {
                return res.status(400).send({ message: "User not found" })
            }
            return res.status(200).send({ message: "Google meet integration saved successfully" })  
        } catch (err) {
            console.error("err => ", err)
            return res.status(500).send({ message: "Internal server error" })
        }
    })

    fastify.get('/get_google_client_id', async (req, res) => {
        const clientId = config.GOOGLE_CLIENT_ID
        const redirectURL = config.FRONT_END_URL + config.GOOGLE_REDIRECT_URL
        return { clientId, redirectURL }
    })

    fastify.post('/isconnected', async (req, res) => {
        const { userId } = req.body
        const result = await googleMeetingController.isConnected({ userId })
        console.log("is connected result => ", result)
        return result
    })

    fastify.post('/get_meeting_schedule', async (req, res) => {
        console.log("get meeting schedule")
        const { userId } = req.body
        console.log("userId => ", userId)
        const result = await googleMeetingController.getMeetingSchedule({ userId })
        return result
    })

}