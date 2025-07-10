
const calendlyController = require("../controller/calendly.controller")

module.exports = async (fastify, opts) => {
    fastify.addHook('preHandler', fastify.authenticate);

    fastify.post('/isconnected', async (req, res) => {
        try {
            const { id } = req.body
            const result = await calendlyController.isConnected({ id })
            console.log("result => ", result)
            return result
        } catch (err) {
            console.log("err => ", err)
        }
    });
}