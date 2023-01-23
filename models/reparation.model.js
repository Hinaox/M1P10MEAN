const mongoose = require("mongoose");
const { Schema } = mongoose;

const reparationSchema = new Schema({
  voiture: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Voitures",
  },
  details: [
    {
      description:{ type:String, required:true},
      montant: { type:Number, required:true, decimals:2 },
      statut: { type: String, required: true, enum: ["StandBy", "En cours", "Fini"] }
    }
    // tsy mila date de tsy mila details momban piece fa atao anady description
  ], 
  description: { type: String, required: false }, // description venant du client
  dateDebut: { type: Date, required: false  },//Date où le garagiste clic sur le boutton "recevoir la voiture"
  dateFin: { type: Date, required: false },//Date où le garagiste clic sur le boutton "Valider bon de sortie"
  paye: {type: String, required: false, enum: ["Non","OK"]}
});

mongoose.set('useFindAndModify', false);
module.exports = mongoose.model("Reparation", reparationSchema);
