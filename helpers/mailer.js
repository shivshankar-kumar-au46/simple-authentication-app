import User from '@/models/userModel';
import nodemailer from 'nodemailer';
import bcryptjs from 'bcryptjs';

export const sendEmail = async ({email, emailType, userId}) => {
try {

  const hashedToken = await bcryptjs.hash(userId.toString(), 10);
if(emailType === "VERIFY") {
  await User.findByIdAndUpdate(userId, {
    verifyToken: hashedToken,
    verifyTokenExpiry: Date.now() + 3600000
  })
}else if(emailType === "RESET") {
  await User.findByIdAndUpdate(userId, {
    forgotPasswordToken: hashedToken,
    forgotPasswordTokenExpiry: Date.now() + 3600000
  })
}

var transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "069b823fde6db2",
    pass: "770e50aefbf7ea"
  }
});

      const mailOptions ={
        from: 'kumarshiv417@gmail.com', // sender address
        to: email, // list of receivers
        subject: emailType === "verify" ? "verify your email" : "reset your password", // Subject line
        text: "Hello world?", // plain text body
        html: `<p>Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">here</a> to ${emailType === "VERIFY" ? "verify your email" : "reset your password"} or copy and paste the link below in your browser. <br> ${process.env.DOMAIN}/verifyemail?token=${hashedToken} </P>`, // html body
      }

      const mailResponse = await transporter.sendMail(mailOptions);
      return mailResponse
} catch (error) {
    throw new Error(error.message)
}
}