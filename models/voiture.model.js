const mongoose = require('mongoose');
const { Schema } = mongoose;

const carSchema = new Schema({
    marque: { type: String, required: true },
    modele: { type: String, required: true },
    immatriculation: { type: String, required: false },
    statut: {
    type: String,
    required: true,
      enum: ["Disponible","Déposé","En réparation","Réparé"]
    },
    utilisateur: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Utilisateur'
    },
});

module.exports = mongoose.model('Voiture', carSchema);
  
