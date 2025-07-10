const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const config = require("../config/index")
const userModel = require("../model/users");
const gooleMeetingRegisterModel = require("../model/google.meeting.model")
const axios = require('axios');


exports.sendAlertToUser = async ({ name, amount, email }) => {
  console.log("subscription email >>> ", name);
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

  const date = new Date();
  const formattedTime = date.toLocaleString('en-US', {
    weekday: 'short',       // e.g., "Mon"
    year: 'numeric',
    month: 'short',         // e.g., "Jun"
    day: '2-digit',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,           // ✅ this gives AM/PM
    timeZoneName: 'short',  // e.g., "CDT"
  });

  console.log(formattedTime);
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
  <title>Payment Confirmation</title>
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
    .content h2 {
      margin-top: 0;
    }
    .button {
      display: inline-block;
      background-color: #4CAF50;
      color: white;
      padding: 12px 24px;
      margin: 20px 0;
      text-decoration: none;
      border-radius: 4px;
      font-weight: bold;
    }
    .summary {
      background-color: #f9f9f9;
      padding: 15px;
      border-radius: 5px;
      margin: 20px 0;
    }
    .summary p {
      margin: 5px 0;
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
      VSAI.online Payment Confirmation
    </div>
    <div class="content">
      <p>Hi ${name},</p>
      <p>We’ve received your <strong> $ ${amount} </strong> payment successfully, and your dashboard is now unlocked!</p>
      <p>You can now start exploring your features and get the most out of your VSAI.online experience.</p>
      <div class="summary">
        <h3>Transaction Summary</h3>
        <p><strong>Amount Paid:</strong> $ ${amount}</p>
        <p><strong>Status:</strong> Confirmed</p>
        <p><strong>Access:</strong> Granted</p>
        <p><strong>Date:</strong> ${formattedTime}</p>
      </div>
      <p>Need help or have questions? Just reply to this email or reach us at <a href="mailto:help@vsai.online">help@vsai.online</a></p>
      <p>Thanks for being part of the VSAI.online community!</p>
      <p>Best Regards,<br>The VSAI Team</p>
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