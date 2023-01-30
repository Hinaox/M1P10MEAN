const express = require("express");
const Voiture = require("../models/voiture.model");
const service = require("../services/voiture.service");

const router = express.Router();

router.put("/voitures/depot/:id", deposer);
router.put("/voitures/sortie/:id", sortie);
router.post("/voitures/add", createV);
router.post("/voitures/reception/:id", reception);

router.get("/voitures", (req, res) => {
  Voiture.find()
    .populate("utilisateur")
    .exec((err, voitures) => {
      if (err) {
        console.log(err);
        return res.status(500).send(err);
      }
      return res.status(200).send(voitures);
    });
});

router.get("/utilisateur/voitures/:IdU", (req, res) => {
  Voiture.find({ utilisateur: req.params.IdU }, (err, voiture) => {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    }
    return res.status(200).send(voiture);
  });
});

router.get("/voiture/:Id", (req, res) => {
  Voiture.findOne({ _id: req.params.Id })
    .populate("utilisateur")
    .exec((err, voiture) => {
      if (err) {
        console.log(err);
        return res.status(500).send(err);
      }
      return res.status(200).send(voiture);
    });
});

router.post("/voitures", (req, res) => {
  v = new Voiture({
    marque: "Peaugeot",
    modele: "607",
    immatriculation: "2222 TAA",
    statut: "Disponible",
    utilisateur: "63cfdc0eed3a77b13e787d4b",
  });
  v.save((err, ret) => {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    }
    return res.status(200).send(ret);
  });
});

module.exports = router