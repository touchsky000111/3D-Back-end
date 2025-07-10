const axios = require("axios")
const emailVerifyModel = require("../model/email.verify")
const userModel = require("../model/users")
const { is_exist_user } = require("../controller/mongoose.controller")
const crypto = require('crypto')
const config = require("../config/index")
const { sendVerifyCodeTONewUser } = require("./auth.controller")

exports.send_verify_code = async ({ email, password, fullName, companyName }) => {
    try {
        const code = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
        console.log(code); // e.g. "004321", "123456", "000001"

        // Hash the password using SHA-256
        const hashedPassword = crypto.createHash('sha256').update(password).digest('hex')
        const is_exist = await is_exist_user(email)
        console.log("is_exist => ", is_exist);
        if (is_exist === true) {
            return "user already existed"
        } else {
            if (await emailVerifyModel.findOne({ email })) {
                await emailVerifyModel.updateOne({ email }, { code: code, date: Date.now(), password: hashedPassword, fullName, companyName })
            } else {
                const newUser = new emailVerifyModel({
                    email: email,
                    code: code,
                    date: Date.now(),
                    password: hashedPassword,
                    fullName: fullName,
                    companyName: companyName
                })
                await newUser.save()
            }
        }

        const sendVerifyCode = await sendVerifyCodeTONewUser(email, code)
        console.log("sendVerifyCode => ", sendVerifyCode)

        return true
    } catch (error) {
        // console.error('Email sending error:', error.response?.data || error.message);
        console.error('Email sending error:', error);
    }


}


exports.verify_code = async ({ email, code }) => {
    const result = await emailVerifyModel.findOne({ email })
    if (code == result.code) {
        const now = Date.now()
        const time = new Date(result.date).getTime() + 5 * 60 * 1000 // Converting Date to timestamp and adding 30 mins
        if (now <= time) {
            return true
        } else {
            return "Code Expired"
        }
    } else {
        return "Wrong Code"
    }
}


exports.reset_password = async ({ email }) => {
    const result = await emailVerifyModel.findOne({ email })
    console.log("result => ", result)
    if (result) {
        console.log("result => ", result)
        const code = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
        console.log(code); // e.g. "004321", "123456", "000001"
        await emailVerifyModel.updateOne({ email }, { code: code, date: Date.now(), isResetPassword: true })

        if (config.testmode == false) {
            const sendVerifyCode = await sendVerifyCodeTONewUser(email, code)
            console.log("sendVerifyCode => ", sendVerifyCode)
        }
        return true
        
    } else {
        return "User not found"
    }
}


exports.verify_reset_password = async ({ email, code }) => {
    const result = await emailVerifyModel.findOne({ email })
    if (code == result.code) {
        const now = Date.now()
        const time = new Date(result.date).getTime() + 5 * 60 * 1000 // Converting Date to timestamp and adding 30 mins
        if (now <= time) {
            return true
        } else {
            return "Code Expired"
        }
    } else {
        return "Wrong Code"
    }
}


exports.generate_new_password = async ({ email, password }) => {
    const result = await emailVerifyModel.findOne({ email })
    const hashedPassword = crypto.createHash('sha256').update(password).digest('hex')
    console.log("result => ", result)
    if (result.isResetPassword == true) {
        await emailVerifyModel.updateOne({ email }, { password: hashedPassword })
        await userModel.updateOne({ email }, { password: hashedPassword })
        return true
    } else {
        return "User not found"
    }
}
