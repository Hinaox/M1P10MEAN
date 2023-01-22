const mongoose = require("mongoose");
const { Schema } = mongoose;

const reparationSchema = new Schema({
  voiture: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Voitures",
  },
  statuts: [
    // { nom:String, date:Date } // otrzao type anle objet
  ], // tableau d'objet contenant la date et le nom du statut : 'deposé', 'receptionné' = 'en cours de reparation' hatao ray ihany reo je pense, 'reparation reussi' rehefa vita daholo ny reparation rehetra, ary 'remis au client' rehefa...
  details: [
    // { piece: String, montant: Number, statut: String, description: String, debutReparation:Date, finReparation:Date }, // otrzao ny type anle objet ato anatinty tableau ty
  ], // tableau d'objet contenant le nom du piece a reparer, montant, description, et aussi statut (Reparé.En cours de reparation,Non reparé ), ary mbola tsara ihany raha asiana date debut sy fin, fa afaka tsy asiana angamba aloha amzao voalohany izao
  description: { type: String, required: false }, // description venant du client
});

module.exports = mongoose.model("Reparation", reparationSchema);
