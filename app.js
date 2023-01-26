// const init = require('./db.init.js')
const server = require('./server.js')

const apiKey = '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';

const axios = require('axios');

const data = {
  sender: {
    name: 'John Doe',
    email: 'john.doe@example.com',
  },
  to: [
    {
      email: 'mahefaran48@gmail.com',
      name: 'Bryan',
    },
  ],
  subject: 'Test Email',
  textContent: 'This is a test email sent using the Sendinblue API',
};

const options = {
  headers: {
    'Content-Type': 'application/json',
    'api-key': apiKey,
  },
};

axios.post('https://api.sendinblue.com/v3/smtp/email', data, options)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });