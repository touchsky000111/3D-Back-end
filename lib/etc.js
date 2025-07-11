exports.sendSMS = async (email, link) => {
  const nodemailer = require('nodemailer');
  // SMTP configuration for Amazon SES
  const smtpHost = 'email-smtp.ap-southeast-2.amazonaws.com'; // Replace with your SES SMTP endpoint
  const smtpPort = 587; // Use 465 for SSL or 587 for TLS
  const smtpUser = 'AKIAZ2EGUCQREPAKJ3GP'; // Your SMTP username from AWS SES
  const smtpPass = 'BI5IkxJLkfAl2gbAODq0JNJOAUcSTetQSaKeVeRYD/Vj'; // Your SMTP password from AWS SES

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
    from: 'noreply@mydesignerplus.com', // Verified sender email address
    to: email, // Recipient email address
    subject: 'CEED CIVIL',
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
    <div class="content">
      <div class="code-box">
        ${link}
      </div>
      <p>If you didn’t request this code, please disregard this email.</p>
      <p>Thank you for choosing MydesignerPlus.</p>
      <p>Best regards,<br>The MydesignerPlus Team<br></p>
    </div>
    <div class="footer">
      © 2025 MYDESIGNERPLUS.COM — All rights reserved.
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


exports.emailJsSMS = async (email, link) => {
  const axios = require("axios")
  const data = {
    service_id: "service_abdeu5g",
    template_id: "template_8ph8msi",
    user_id: "0wSy41IwXMJU213N_",
    accessToken: "48obBDjUFn0a76SYlygzn",
    template_params: {
      email: email,
      link: link
    },
  };

  try {
    const response = await axios.post('https://api.emailjs.com/api/v1.0/email/send', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log('Email sent successfully:', response.data);
    return true
  } catch (error) {
    console.error('Email sending error:', error.response?.data || error.message);
    return false
  }
}