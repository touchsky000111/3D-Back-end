const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const config = require("../config/index")
const userModel = require("../model/users");
const gooleMeetingRegisterModel = require("../model/google.meeting.model")
const axios = require('axios');
const userVerifyModel = require("../model/email.verify");


exports.generateTokens = (user) => {
    const accessToken = jwt.sign(
        {
            id: user._id,
            email: user.email,
            authProvider: user.authProvider,
            role: user.role
        },
        config.ACCESS_TOKEN_SECRET,
        { expiresIn: config.ACCESS_TOKEN_EXPIRE_TIME }
    );
    const refreshToken = jwt.sign(
        {
            id: user._id,
            email: user.email,
            authProvider: user.authProvider,
            role: user.role
        },
        config.REFRESH_TOKEN_SECRET,
        { expiresIn: config.REFRESH_TOKEN_EXPIRE_TIME }
    );
    return { accessToken, refreshToken };
};

exports.handleGoogleAuth = async ({ email, name, googleId, image }) => {
    try {
        // Check if user exists with this email
        let user = await userModel.findOne({ email });

        if (!user) {
            // Create new user
            user = new userModel({
                email,
                fullName: name,
                googleId,
                avatar: image,
                authProvider: 'google',
                lastLogin: new Date()
            });
            await user.save();
            console.log('Created new user with Google auth:', user);
        } else {
            // Update existing user
            user.googleId = googleId;
            user.avatar = image;
            user.authProvider = 'google';
            user.lastLogin = new Date();
            await user.save();
            console.log('Updated existing user with Google auth:', user);
        }

        // Generate tokens
        const tokens = this.generateTokens(user);
        return {
            success: true,
            ...tokens,
            user: {
                id: user._id,
                email: user.email,
                name: user.fullName,
                avatar: user.avatar,
                authProvider: user.authProvider
            }
        };
    } catch (error) {
        console.error('Error in handleGoogleAuth:', error);
        throw error;
    }
};



exports.sendVerifyCodeTONewUser = async (email, code) => {


    const user = await userVerifyModel.findOne({ email: email
    });

    const name = user.fullName
    // SMTP configuration for Amazon SES
    const smtpHost = 'email-smtp.eu-north-1.amazonaws.com'; // Replace with your SES SMTP endpoint
    const smtpPort = 587; // Use 465 for SSL or 587 for TLS
    const smtpUser = 'AKIA5FTZAKL6BKQ35FPL'; // Your SMTP username from AWS SES
    const smtpPass = 'BLfUjbvJQt3vrhyI/rv792FJr1g++vPtnjM5sLDQlpbX'; // Your SMTP password from AWS SES

    // Create a Nodemailer transporter using SMTP
    const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465, // true for port 465, false for other ports
        auth: {
            user: smtpUser,
            pass: smtpPass,
        },
    });

    // Email message options
    const mailOptions = {
        from: 'noreply@vsai.online', // Verified sender email address
        to: email, // Recipient email address
        subject: 'VSAI',
        html: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Verification Code</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
    }
    .email-container {
      background-color: #ffffff;
      max-width: 600px;
      margin: 40px auto;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      overflow: hidden;
    }
    .header {
      background-color: #4CAF50;
      color: white;
      padding: 20px;
      text-align: center;
      font-size: 20px;
    }
    .content {
      padding: 30px;
      color: #333;
      line-height: 1.6;
    }
    .code-box {
      background-color: #f9f9f9;
      padding: 20px;
      text-align: center;
      font-size: 28px;
      letter-spacing: 4px;
      font-weight: bold;
      border-radius: 8px;
      margin: 20px 0;
    }
    .footer {
      font-size: 12px;
      color: #777;
      text-align: center;
      padding: 15px;
      background-color: #f4f4f4;
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      VSAI.online Verification Code
    </div>
    <div class="content">
      <p>Hello ${name},</p>
      <p>Welcome to VSAI, your trusted AI partner for business solutions.</p>
      <p>Your verification code is:</p>
      <div class="code-box">
        ${code}
      </div>
      <p>If you didn’t request this code, please disregard this email.</p>
      <p>Thank you for choosing VSAI.</p>
      <p>Best regards,<br>The VSAI Team<br><i>AI Agent for Your Business</i></p>
    </div>
    <div class="footer">
      © 2025 VSAI.online — All rights reserved.
    </div>
  </div>
</body>
</html>
`,
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.error('Error sending email:', error);
        }
        console.log('Email sent:', info.messageId);
        console.log('Preview URL:', info);
    });

}