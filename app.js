const server = require('./server.js')
const init = require('./db.init.js')

// const nodemailer = require("nodemailer");

// // Créer un objet de transporteur SMTP
// let transporter = nodemailer.createTransport({
//   host: "smtp.example.com",
//   port: 465,
//   secure: true, // utiliser SSL
//   auth: {
//     user: "username",
//     pass: "password"
//   }
// });

// // Préparer l'objet d'email
// let mailOptions = {
//   from: '"John Doe" <john.doe@example.com>',
//   to: "jane.doe@example.com",
//   subject: "Hello",
//   text: "Hello World!",
//   html: "<b>Hello World!</b>"
// };

// // Envoyer l'e-mail
// transporter.sendMail(mailOptions, (error, info) => {
//   if (error) {
//     return console.log(error);
//   }
//   console.log("E-mail envoyé: %s", info.messageId);
// });

// // Vérifier si l'e-mail a été envoyé avec succès
// transporter.verify((error, success) => {
// if (error) {
// console.log(error);
// } else {
// console.log("Le serveur SMTP est prêt à envoyer des e-mails.");
// }
// });

// // Pour finir, on peut utiliser la fonction close() pour fermer la connexion avec le serveur SMTP
// transporter.close();