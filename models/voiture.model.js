const mongoose = require('mongoose');
const { Schema } = mongoose;

const carSchema = new Schema({
    marque: { type: String, required: true },
    modele: { type: String, required: true },
    immatriculation: { type: String, required: false },
    status: {
    type: String,
    required: true,
      enum: ["disponible", "déposé", "en réparation", "réparé","prêt"]
    },
    utilisateur: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Utilisateur'
    },
});

mongoose.set('useFindAndModify', false);
module.exports = mongoose.model('Voiture', carSchema);
  
