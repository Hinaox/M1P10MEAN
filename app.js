const express = require('express')
const mongoose = require('mongoose');

mongoose.set('strictQuery',false);

mongoose.connect('mongodb+srv://M1P10MEAN:mdpsimple@m1p10mean.b3kaviz.mongodb.net/M1P10MEAN')
  .then(() => {
    console.log('Connected!')
    
    const userSchema = new mongoose.Schema({
      _id: Number,
      name: String
    });

    const User = mongoose.model('user', userSchema);

    User.find({ _id: 1, name: "hiaro" }, (err, res) => {
      if (err) conso(err);
      console.log(res);
    });
  
    User.find({}, (err, res) => {
      if (err) conso(err);
      console.log(res);
    })
    
    const exampleSchema = new mongoose.Schema({
      title: String,
      content: String,
      date: Date
    });
    
    const Example = mongoose.model('Example', exampleSchema);
    
    Example.findOne({title: 'Example Title'}, (err, example) => {
      if (err) err;
      console.log(example);
    });
    
    Example.find({}, (err, examples) => {
      if (err) console.log(err);
      return console.log(examples.len);
    })
  })
  .catch(err => console.log('Connection while connecting = '+err))

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(`[
    {
      "_id": 1,
      "name": "hiaro"
    },
    {
      "_id": 2,
      "name": "bray"
    }
  ]`)
})

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})

