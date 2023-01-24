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

carSchema.statics.changeStatus = async function (id, numStatus) {
  statusTabl = ["disponible", "déposé", "en réparation", "réparé", "prêt"];
  try {
    const car = await this.findById(id);
    car.status = statusTabl[numStatus];
    await car.save();
    return { message: "Statut de la voiture:" + statusTabl[numStatus]};
  } catch (error) {
    throw new Error(`Une erreur s'est produite lors de la mise à jour du statut de la voiture: ${error.message}`);
  }
};

mongoose.set('useFindAndModify', false);
module.exports = mongoose.model('Voiture', carSchema);
  
