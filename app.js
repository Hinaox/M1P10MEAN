const express = require('express')
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://M1P10MEAN:mdpsimple@m1p10mean.b3kaviz.mongodb.net/test')
  .then(() => console.log('Connected!'))
  .catch(err => console.log(err));

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Coucou World!')
})

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})

