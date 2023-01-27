const axios = require("axios");

const apiKey =
  "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";

const options = {
  headers: {
    "Content-Type": "application/json",
    "api-key": apiKey,
  },
};

module.exports = async function sendMail(data) {
  axios
    .post("https://api.sendinblue.com/v3/smtp/email", data, options)
    .then((response) => {
      // console.log(response.data);
    }) 
    .catch((error) => {
      console.log(error);
    });
}
