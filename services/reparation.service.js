const reparation = require("../models/reparation.model");

module.exports = createReparation = async (req, res) => {
  try {
    console.log(req.body);
    const carId = req.body._id;
    const car = await Car.findById(carId);
    if (!car) {
      return res.status(404).send("Voiture introuvable");
    }
    // Modifier le statut de la voiture en "Déposé"
    car.status = "Déposé";
    await car.save();

    // Créer le document dans la collection des réparations
    const reparation = await reparation.create({
      voiture: carId,
      paye: false,
    });

    return res.status(200).send(reparation);
  } catch (err) {
    console.log(err.message);
    return res.status(500).send(err.message);
  }
};
