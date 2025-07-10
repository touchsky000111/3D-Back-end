const userModel = require("../model/users.model")
const crypto = require('crypto')
const { generateTokens } = require("../controller/auth.controller")
const { generateHashedPassword } = require("../lib/auth")
exports.is_exist_user = async (email) => {
    try {
        const user = await userModel.findOne({ email })
        console.log("user => ", user);
        if (user) return true;
        else return false;
    } catch (error) {
        // console.error('>> ERROR: Is_Exist_User error >> ', error.response?.data || error.message);
        console.error('>> ERROR: Is_Exist_User error >> ', error);
    }
}

exports.regist_user = async (data) => {
    try {
        const newUser = new userModel(data)
        await newUser.save()
    } catch (err) {
        console.error('err => ', err)
    }
}

exports.login = async ({ email, password }) => {
    if (await this.is_exist_user(email)) {
        const user = await userModel.findOne({ email })
        const userPassword = String(user.password)
        const hashedPassword = String(await generateHashedPassword(password))
        console.log(userPassword)
        console.log(hashedPassword)
        if (userPassword == hashedPassword) {
            const access_token = generateTokens(user)

            const lastLogin = new Date()

            await userModel.updateOne({ email }, { lastLogin })
            return access_token
        } else {
            return "Password not Correct"
        }
    } else {
        return "Invalid User"
    }
}

exports.get_user = async (email) => {
    const user = await userModel.findOne({ email })
    return user
}

exports.getUserById = async (id) => {
    const user = await userModel.findById(id)
    return user
}

exports.saveCalendlyAccessToken = async (id, accessToken) => {

    const isRegisted = await calendlyApiKeyModel.find({ userId: id })
    if (isRegisted.length !== 0) return "already registed"

    const user = await this.getUserById(id)
    const new_calenderApiKey = new calendlyApiKeyModel({
        userId: id,
        email: user.email,
        access_token: accessToken
    })
    await new_calenderApiKey.save()
}