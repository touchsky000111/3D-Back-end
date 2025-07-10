const userModel = require("../model/users.model")
const mongooseController = require("./mongoose.controller")
const authLib = require("../lib/auth")
exports.updateProfile = async ({ id, password, currentPassword, fullName, companyName, avatar }) => {
    try {
        if (password == "") {
            await userModel.updateOne({ _id: id }, { fullName, companyName, avatar })
            console.log("savied 1")
        }
        else {
            const user = await mongooseController.getUserById(id)
            const userPassword = String(user.password)
            const currentHashedPassword = String(await authLib.generateHashedPassword(currentPassword))

            console.log("user pwd => ", String(user.password))
            console.log("hashed +> ", String(currentHashedPassword))


            if (userPassword == currentHashedPassword)
                await userModel.updateOne({ _id: id }, { fullName, password: await authLib.generateHashedPassword(password), companyName, avatar })
            else return "Current Password is not correct"
            console.log("savied 2")
        }
        return true
    } catch (err) {
        console.log("err => ", err)
    }
}

exports.getProfile = async (id) => {
    try {
        const user = await userModel.findById(id)
        return user
    } catch (err) {
        console.error("err => ", err)
    }
}