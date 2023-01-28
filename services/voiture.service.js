const utilisateurModel = require("../models/utilisateur.model");
const Voiture = require("../models/voiture.model");
const reparation = require("../services/reparation.service");
const sendMail = require("./sendMail.service");

module.exports = deposer = async (req, res) => {
  try {
    const carId = req.params.id.slice(3);
    const car = await Voiture.findById({ _id: carId });
    if (!car) {
      return res.status(404).send("Voiture introuvable");
    }
    car.statut = "Déposé";
    await car.save();
    return res.status(200).send(car);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

module.exports = reception = async (req, res) => {
  try {
    const carId = req.params.id.slice(3);
    const car = await Voiture.findById({ _id: carId });
    const desc = req.body.description;
    if (!car) {
      return res.status(404).send("Voiture introuvable");
    }
    if (car.statut != "Déposé") {
      return res.status(404).send("Voiture non déposé");
    }
    rep = await createReparation(carId,desc);
    if (rep.description == 'error = error') 
        res.status(500).send(rep.message);
    return res.status(200).send(rep);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

module.exports = sortie = async (req, res) => {
  try {
    const carId = req.params.id.slice(3);
    const car = await Voiture.findById({ _id: carId })
      .populate("utilisateur")
      .exec();
    if (!car) {
      return res.status(404).send("Voiture introuvable");
    }
    car.statut = "Disponible";
    await car.save();
    const data = {
      sender: {
        name: "Majestic garage",
        email: "majestic.garage@gmail.com",
      },
      to: [
        {
          email: car.utilisateur.email,
          name: car.utilisateur.nom,
        },
      ],
      subject: "Voiture réparée",
      htmlContent:
        "<h4>Bonjour " +
        car.utilisateur.nom +
        ",</h4>" +
        "<h4>Votre " +
        car.marque +
        " " +
        car.modele +
        " immatriculée " +
        car.immatriculation +
        " a été validé pour sortir du garage.</h4><h4>Cordialement.</h4>" +
        "_____________________________________________________________________<br>" +
        "Majestic Garage<br>Tél: +138297961372<br>Email: majestic.garage@gmail.com",
    };
    await sendMail(data);
    return res.status(200).send(car);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};
