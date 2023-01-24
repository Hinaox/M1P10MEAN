const express = require("express");
const reparation = require("../models/reparation.model");

const router = express.Router();

router.get("/reparations", (req, res) => {
  reparation.find()
    .populate("voiture")
    .exec((err, reparations) => {
      if (err) {
        console.log(err);
        return res.status(500).send(err);
      }
      return res.status(200).send(reparations);
    });
});

// router.post("/reparations", (req, res) => {
//   v = new reparation({
//     marque: "Peaugeot",
//     modele: "607",
//     immatriculation: "2222 TAA",
//     statut: "Disponible",
//     utilisateur: "63cfdc0eed3a77b13e787d4b",
//   });
//   v.save((err, ret) => {
//     if (err) {
//       console.log(err);
//       return res.status(500).send(err);
//     }
//     return res.status(200).send(ret);
//   });
// });

module.exports = router;
