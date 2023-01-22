const mongoose = require('mongoose');
const { Schema } = mongoose;

const carSchema = new Schema({
    marque: { type: String, required: true },
    modele: { type: String, required: true },
    immatriculation: { type: String, required: false },
    utilisateur: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Utilisateurs'
    },
});

module.exports = mongoose.model('Voitures', carSchema);
  