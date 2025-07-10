const leadController = require("../controller/lead.controller");
const { getUserById } = require("../controller/mongoose.controller");
const Bulk_Call_Schedule_Model = require("../model/bulk.call.schedule")
const User_Model = require("../model/users")
module.exports = async (fastify, opts) => {
    fastify.addHook('preHandler', fastify.authenticate);

    fastify.post('/regist', async (req, res) => {
        try {
            const {
                userId,
                name,
                email,
                phone,
                source
            } = req.body
            const date = Date.now()
            console.log(userId, name, email, phone, source, date)
            await leadController.regist({
                userId,
                name,
                email,
                phone,
                source,
                date
            })
            res.code(200).send({
                msg: 'jo'
            });
        } catch (err) {
            console.error("err => ", err)
        }
    });

    fastify.post('/import-leads', async (req, res) => {
        try {
            const {
                userId,
                leads
            } = req.body

            console.log(userId, leads)
            const date = Date.now()
            Promise.all(leads.map(async (lead) => {
                await leadController.regist({
                    userId,
                    name: lead.name,
                    email: lead.email,
                    phone: lead.phone,
                    source: lead.source,
                    location: lead.location,
                    notes: lead.notes,
                    business_type: lead.business_type,
                    company_name: lead.company_name,
                    preferred_contact_time: lead.preferred_contact_time,
                    date
                })
            }))
            return "ok"
        } catch (err) {
            console.error("err => ", err)
        }
    })

    fastify.post("/all-leads", async (req, res) => {
        try {
            console.log("start ...")
            const {
                userId
            } = req.body
            const result = await leadController.getAllLeads({
                userId
            })
            return result
        } catch (err) {
            console.error("err => ", err)
        }
    })

    fastify.post("/delete", async (req, res) => {
        try {
            console.log("delete ...")
            const {
                _id
            } = req.body
            const result = await leadController.deleteLeads({
                _id
            })
            return "Ok"
        } catch (err) {
            console.log("err", err)
        }
    })


    fastify.post("/schedule-calls", async (req, res) => {
        try {
            const {
                userId,
                date,
                time,
                timezone,
                afterHour
            } = req.body
            console.log("schedule-calls => ", userId, date, time, timezone, afterHour)
            const user = await User_Model.findOne({
                _id: userId
            })
            console.log("user => ", user)
            if (!user) {
                return res.code(400).send({
                    msg: "User not found"
                })
            }

            const result = await Bulk_Call_Schedule_Model.create({
                userId,
                email: user.email,
                date,
                time,
                timezone,
                afterHour,
                status: "active"
            })

            
            return result

        } catch (err) {
            console.error("err => ", err)
            res.code(500).send({
                msg: "Internal Server Error"
            })
        }
    })


    fastify.get('/get-schedule-calling-time', async (req, res) => {
        try {
            const {
                userId
            } = req.query

            console.log("get-schedule-calling-time => ", userId)

            const result = await Bulk_Call_Schedule_Model.find({
                userId
            })

            console.log("result => ", result)
            return result
        } catch (err) {
            console.error("err => ", err)
            res.code(500).send({
                msg: "Internal Server Error"
            })
        }
    })
}