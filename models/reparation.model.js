const mongoose = require("mongoose");
const { Schema } = mongoose;

const reparationSchema = new Schema({
  voiture: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Voitures",
  },
  details: [
    {
      description:{ type:String, required:false},
      montant: { type:Number, required:true, decimals:2 },
      status: { type: String, required: true, enum: ["En cours", "Fini"] }
    }
    // { piece: String, montant: Number, statut: String, description: String, debutReparation:Date, finReparation:Date }, // otrzao ny type anle objet ato anatinty tableau ty
  ], // tableau d'objet contenant le nom du piece a reparer, montant, description, et aussi statut (Reparé.En cours de reparation,Non reparé ), ary mbola tsara ihany raha asiana date debut sy fin, fa afaka tsy asiana angamba aloha amzao voalohany izao
  description: { type: String, required: false }, // description venant du client
  dateDebut: { type: Date, required: false  },//Date où le garagiste clic sur le boutton "recevoir la voiture"
  dateFin: { type: Date, required: false },//Date où le garagiste clic sur le boutton "Valider bon de sortie"
  paye: {type: String, required: false, enum: ["non","OK"]}
});

mongoose.set('useFindAndModify', false);
module.exports = mongoose.model("Reparation", reparationSchema);
