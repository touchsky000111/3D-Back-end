const jwt = require('jsonwebtoken');
const config = require("../config/index")
const userModel = require("../model/users");
const gooleMeetingRegisterModel = require("../model/google.meeting.model")
const axios = require('axios');
const leaderModel = require("../model/leads")
const googleMeetingScheduleModel = require("../model/goole.meeting.schedule")
const { getCustomerName } = require("../lib/etc")
const { generateAccessToken } = require("../lib/auth")

exports.saveGoogleMeetIntegration = async ({ userId, code }) => {
    const tokenResponse = await axios.post('https://oauth2.googleapis.com/token', null, {
        params: {
            code: code,
            client_id: config.GOOGLE_CLIENT_ID,
            client_secret: config.GOOGLE_CLIENT_SECRET,
            redirect_uri: config.FRONT_END_URL + config.GOOGLE_REDIRECT_URL,
            grant_type: 'authorization_code'
        }
    });

    console.log('Access Token:', tokenResponse.data.access_token);

    const user = await userModel.findById(userId)
    if (user.length === 0) {
        return false
    }
    console.log("user => ", user)
    const newGoogleMeetingRegister = new gooleMeetingRegisterModel({
        userId: userId,
        email: user.email,
        refresh_token: tokenResponse.data.refresh_token
    })
    await newGoogleMeetingRegister.save()
    return true
}


exports.isConnected = async ({ userId }) => {
    console.log("is connected userId => ", userId)
    const user = await gooleMeetingRegisterModel.findOne({ userId: userId })

    console.log("user interated google meeting ?? =>>>> ", user)
    if (user) {
        return true
    } else {
        return false
    }
}


exports.createMeeting = async ({ customerPhoneNumber, meetingDate, callHeader }) => {
    const leader = await leaderModel.findOne({ phone: customerPhoneNumber })
    console.log("leader => ", leader)
    if (!leader) {
        return false
    }
    const calendarId = "primary";
    // Parse the start datetime string into a Date object
    const startDate = new Date(meetingDate);
    console.log("startDate => ", startDate)
    // Calculate the end datetime by adding 1 hour (3600000 milliseconds)
    const endDate = new Date(startDate.getTime() + 60 * 60 * 1000);
    console.log("endDate => ", endDate)

    const event = {
        summary: "Meeting with Team",
        description: "Discuss project updates",
        start: {
            dateTime: startDate.toISOString(),
            timeZone: "UTC"
        },
        end: {
            dateTime: endDate.toISOString(),
            timeZone: "UTC"
        },
        attendees: [
            { email: leader.email },
        ],
        conferenceData: {
            createRequest: {
                requestId: "sample-123",
                conferenceSolutionKey: { type: "hangoutsMeet" }
            }
        }
    };

    let accessToken = ""
    let email = ""
    // if (callHeader === "tlkwjdqhd") {
    //     email = "warrytomas51@gmail.com"
    //     const googleMeetingRegister = await gooleMeetingRegisterModel.findOne({ email: email })
    //     accessToken = await generateAccessToken(googleMeetingRegister.refresh_token)
    // }
    const user = await userModel.findOne().sort({ _id: 1 });
    email = user.email
    const googleMeetingRegister = await gooleMeetingRegisterModel.findOne({ email: email })
    console.log("googleMeetingRegister => ", googleMeetingRegister)
    accessToken = await generateAccessToken(googleMeetingRegister.refresh_token)
    console.log("accessToken => ", accessToken)
    console.log("email => ", email)
    console.log("leader.email => ", leader.email)

    const response = await axios.post(
        `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?conferenceDataVersion=1`,
        event,
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json"
            }
        }
    )
    console.log("Event created:", response.data);
    console.log("Google Meet link:", response.data.hangoutLink || response.data.conferenceData?.entryPoints?.[0]?.uri);

    const date = new Date()

    const newGoogleMeetingSchedule = new googleMeetingScheduleModel({
        customerEmail: leader.email,
        meetingDate: meetingDate,
        meetingLink: response.data.hangoutLink || response.data.conferenceData?.entryPoints?.[0]?.uri,
        email: email,
        date: date
    })
    await newGoogleMeetingSchedule.save()

    return true
}




exports.getMeetingSchedule = async ({ userId }) => {
    const user = await userModel.findById(userId)
    const meetingSchedule = await googleMeetingScheduleModel.find({ email: user.email })
    console.log("meetingSchedule => ", meetingSchedule)
    const result = await Promise.all(meetingSchedule.map(async (schedule) => {
        try {
            const customerName = await getCustomerName(schedule.customerEmail)
            return {
                customerName,
                meetingDate: schedule.meetingDate,
                meetingLink: schedule.meetingLink,
                customerEmail: schedule.customerEmail,
                date: schedule.date
            }
        } catch (err) {
            console.error("Error processing schedule:", err)
            return null
        }
    }))
    console.log("meeting result => ", result)
    return result
}