const calendlyApiKeyModel = require("../model/calendly.oauth.model")

exports.isConnected = async ({ id }) => {
    try {

        const isConnected = await calendlyApiKeyModel.find({ userId: id })
        console.log("is Connect => ", isConnected)
        if (isConnected.length == 0) return false
        else return true
    } catch (error) {
        console.error("Failed to get Phone Number details:", error.response ? error.response.data : error.message);
    }
}
