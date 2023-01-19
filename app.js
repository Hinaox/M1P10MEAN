const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose');
const router = express.Router();

mongoose.set('strictQuery',false);
mongoose.connect('mongodb+srv://M1P10MEAN:mdpsimple@m1p10mean.b3kaviz.mongodb.net/M1P10MEAN')
  .then(() => {
    console.log('Connected!')
  
  })
  .catch(err => console.log('Connection while connecting = '+err))

const app = express()
const port = 3000
app.use(cors({
  origin: 'http://localhost:4200'
}))

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


// Create a new product
router.post('/', (req, res, next) => {
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price
  });
  product
    .save()
    .then(result => {
      res.status(201).json({
        message: 'Product created successfully',
        createdProduct: {
            name: result.name,
            price: result.price,
            _id: result._id,
            request: {
                type: 'GET',
                url: 'http://localhost:3000/products/' + result._id
            }
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

// Get all products
router.get('/', (req, res, next) => {
  Product.find()
    .select('name price _id')
    .exec()
    .then(docs => {
      const response = {
        count: docs.length,
        products: docs.map(doc => {
          return {
            name: doc.name,
            price: doc.price,
            _id: doc._id,
            request: {
              type: 'GET',
              url: 'http://localhost:3000/products/' + doc._id
            }
          };
        })
      };
      res.status(200).json(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

// const userSchema = new mongoose.Schema({
//   _id: Number,
//   name: String
// });

// const User = mongoose.model('user', userSchema);

// User.find({ name: 'hiaro' }, (err, res) => {
//   if (err) console.log(err);
//   console.log(res);
// });