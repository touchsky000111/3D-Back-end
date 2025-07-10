const config = require('../config/index')
const buildController = require('../controller/building.controller')
module.exports = async (fastify) => {
    // Public routes

    fastify.post("/save", async (req, reply) => {
        try {
            console.log('Content-Type:', req.headers['content-type']);

            const data= req.body
            console.log("data => ", data)
            await buildController.saveDesign(data)
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

    fastify.get("/get", async (req, rep) => {
        try {
            console.log("param => ", req.query)
            const { id, dt } = req.query
            console.log("getting data 123")
            const result = await buildController.find({ id, dt })
            rep.code(200).send(result)
        } catch (err) {
            console.error('err => ', err)
            return rep.code(500).send({
                msg: false
            });
        }
    })

}
