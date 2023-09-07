const nodemailer = require("nodemailer");

// Create a transporter object using your email service provider's SMTP settings
const transporter = nodemailer.createTransport({
  service: process.env.nodemailerService, // e.g., 'Gmail', 'Yahoo', 'Outlook', etc.
  auth: {
    user: process.env.nodemailerUsername,
    pass: process.env.nodemailerPassword
  }
})

// Function to send the OTP email
function sendOTPEmail(email, otp) {
  const mailOptions = {
    from: "shiva@gmail.com",
    to: email,
    subject: "Your 4 digit OTP Code ",
    text: `Your OTP code is: ${otp}`,
  };
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        reject(err);
      } else {
        resolve(info);
      }
    });
  });
}

module.exports = { sendOTPEmail };
