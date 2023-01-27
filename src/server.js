const express = require('express');
const cors = require('cors');
const init = require('./db.init.js');
const mongoose = require('mongoose');
const utilisateurRoute = require('./routes/utilisateur.route'); 
const depenseRoute = require('./routes/depense.route'); 
const paiementRoute = require('./routes/paiement.route');
const reparationRoute = require('./routes/reparation.route');
//const voitureRoute = require('./routes/voiture.route');

mongoose.set('strictQuery',false);
module.exports = mongoose.connect('mongodb+srv://M1P10MEAN:mdpsimple@m1p10mean.b3kaviz.mongodb.net/M1P10MEAN')
  .then(() => {
    console.log('Connected!')
  })
  .catch(err => console.log('Connection while connecting = '+err))

const app = express()
const port = 3000
app.use(cors({
  origin: 'http://localhost:4200'
}))

app.use('/utilisateur',utilisateurRoute);

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})

//console.log("init base");
//init();