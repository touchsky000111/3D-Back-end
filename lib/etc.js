const leaderModel = require("../model/leads")

exports.starter = "starter"
exports.pro = "pro"
exports.scale = "scale"
exports.free = "free"

exports.getCustomerName = async (customerEmail) => {
    const customer = await leaderModel.findOne({ email: customerEmail })
    return customer.name
}
