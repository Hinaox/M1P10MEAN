const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  requireTLS: true,
  auth: {
    user: "mahefaran48@gmail.com",
    pass: "khhmbfaprlwhhjbw",
  },
});

module.exports = async function sendMail(data) {
  transporter.sendMail(data, function (error, info) {
    if (error) {
      console.log(error);
    }
  });
};
