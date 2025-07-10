const openai = require("../lib/openai")
const googleMeetingController = require("../controller/meeting.controller")
const userModel = require("../model/users");
const gooleMeetingSchedule = require("../model/goole.meeting.schedule");
const gooleMeetingRegisterModel = require("../model/google.meeting.model");
const phoneNumberController = require("../controller/phonenumber.controller");
const twilioModel = require("../model/twilio.model");
const phonenumberModel = require("../model/phonenumber.model");


module.exports = async (fastify, opts) => {
    fastify.post('/', async (req, res) => {
        try {
            const { message, customer } = req.body
            if (!message.startedAt) return
            if (!message.endedAt) return
            console.log("call event key => ", req.headers['x-vapi-secret'])
            const data = message.messages
            const callHeader = req.headers['x-vapi-secret']
            const filteredData = data.filter(item => item.role === 'user' || item.role === 'bot');

            // Remove call from active calls tracking when it ends
            if (message.endedAt) {
                await phoneNumberController.removeActiveCall(message.id);
            }

            // const filteredData = [
            //     { role: 'bot', message: 'Hi, Nahan. This is Riley from Insure Well. How are you today?' },
            //     { role: 'user', message: "I am busy today, how about tomorrow?" },
            //     { role: 'bot', message: "I can see that you're busy today. How about we schedule a call for tomorrow?" },
            //     { role: 'user', message: "Yes, that's fine. What time is good for you?" },
            //     { role: 'bot', message: "How about 10 AM? Is that a good time for you?" },
            //     { role: 'user', message: "Yes, that's good. Thank you." },
            //     { role: 'bot', message: "Great! I'll see you at 10 AM tomorrow. Have a great day!" },
            // ];

            const meetingDate = await openai.getMeetingDate({ messages: filteredData })
            console.log("meeting date = > ", meetingDate)


            console.log("customer phone number => ", message.customer.number)

            if (meetingDate !== null) {
                const result = await googleMeetingController.createMeeting({ customerPhoneNumber: message.customer.number, meetingDate: meetingDate, callHeader: callHeader })
                console.log("result => ", result)
            } else {
                console.log("Meeting was not created")
            }

            return "ok"
        } catch (err) {
            console.log("err => ", err)
        }
    });

    fastify.get('/', async (req, res) => {
        try {
            console.log("received event")

            return "ok"
        } catch (err) {
            console.log("err => ", err)
        }
    })

    fastify.post("/verify-phone-number-callback", async (req, res) => {
        try {

            console.log("Phone Webhook is running >>>>>>>>>>>>>>>>>")
            const { AccountSid, VerificationStatus, Called } = req.body
            console.log("AccountSid => ", AccountSid)
            console.log("VerificationStatus => ", VerificationStatus)
            console.log("Called => ", Called)
            if (VerificationStatus !== "success") {
                return res.code(400).send({ error: "Phone number verification failed" })
            }
            const user = await twilioModel.findOne({ accountSid: AccountSid })
            if (!user) {
                return res.code(400).send({ error: "User not found" })
            }

            const newPhonenumber = new phonenumberModel({
                userId: user.userId,
                email: user.email,
                phoneNumber: Called,
            })

            await newPhonenumber.save()

            return res.code(200).send({ message: "Phone number verified successfully", phoneNumber: Called })
        } catch (err) {
            console.log("err => ", err)
            res.code(400).send({ error: "Failed to verify phone number" })
        }
    })

}