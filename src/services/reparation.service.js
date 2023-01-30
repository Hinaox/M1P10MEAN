const repair = require("../models/reparation.model");
const { exists } = require("../models/voiture.model");

module.exports = createReparation = async (idV, desc) => {
  try {
    let reparation = await repair.create({
      voiture: idV,
      paye: false,
      description: desc,
      dateDebut: now()
    });
    console.log(reparation);
    return reparation;
  } catch (err) {
    console.log(err.message);
    return {
      message: err.message,
      description: "error = error",
    };
  }
};

module.exports = addDetail = async (req, res) => {
  try {
    const rep = await repair
      .findOne({ _id: req.body.id })
      .populate("voiture")
      .exec();
    if (!rep) return res.status(500).send(`Voiture qui n'existe pas`);
    rep.details.push({
      description: req.body.description,
      montant: req.body.montant,
      statut: "En attente",
    });
    await rep.save();
    return res.status(200).send(rep);
  } catch (err) {
    console.log(err.message);
    return err.message;
  }
};

module.exports = setDetailStatus = async (req, res) => {
  try {
    const rep = await repair
      .findOne({ _id: req.body.id })
      .populate("voiture")
      .exec();
    if (!rep) return res.status(500).send('Reparation inexistant');
    let repToEdit = rep.details.filter((e) => e._id == req.body._id)[0];
    repToEdit.statut = req.body.next;
    let index = rep.details.map((e) => e._id).indexOf(req.body._id);
    rep.details[index] = repToEdit;
    await rep.save();
    return res.status(200).send(rep);
  } catch (err) {
    console.log(err.message);
    return err.message;
  }
};
