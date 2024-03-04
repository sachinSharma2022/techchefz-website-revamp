import { mailer_Subject } from "@/lib/constants";
var nodemailer = require("nodemailer");
export async function sendMail(htmlContent, filecontent) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_FROM_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
  });
  var mailOptions = filecontent
    ? {
        from: process.env.NODEMAILER_FROM_EMAIL,
        to: process.env.NODEMAILER_TO_EMAIL,
        subject: mailer_Subject,
        html: htmlContent,
        attachments: [
          {
            // use URL as an attachment
            filename: "CV.pdf",
            content: filecontent,
          },
        ],
      }
    : {
        from: process.env.NODEMAILER_FROM_EMAIL,
        to: process.env.NODEMAILER_TO_EMAIL,
        subject: mailer_Subject,
        html: htmlContent,
      };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      throw new Error(error);
    } else {
      console.log("Email Sent");
      return true;
    }
  });
}
