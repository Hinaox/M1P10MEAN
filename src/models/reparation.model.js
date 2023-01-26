const mongoose = require("mongoose");
const { Schema } = mongoose;

const reparationSchema = new Schema({
  voiture: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Voiture",
  },
  details: [
    {
      description:{ type:String, required:true},
      montant: { type:Number, required:true, decimals:2 },
      statut: { type: String, required: true, enum: ["En attente", "En cours", "Fini"] }
    }
  ], 
  description: { type: String, required: false }, // description venant du client
  dateDebut: { type: Date, required: false  }, //Date où le garagiste clic sur le boutton "recevoir la voiture"
  dateFin: { type: Date, required: false }, //Date où le garagiste clic sur le boutton "Valider bon de sortie"
  paye: {type: Boolean, required: true}
});

reparationSchema.statics.ajoutDetail = async function(id, details) {
  try {
    const reparation = await this.findById(id);
    reparation.details.push(details);
    return await reparation.save();
  } catch (err) {
    throw err;
  }
}

reparationSchema.statics.changeStatutPaiement = async function(id) {
  try {
    const reparation = await this.findById(id);
    reparation.paye = "OK";
    return await reparation.save();
  } catch (err) {
    throw err;
  }
}

module.exports = mongoose.model("Reparation", reparationSchema);
