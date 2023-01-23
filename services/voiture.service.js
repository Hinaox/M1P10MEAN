const Voiture = require('../models/voiture.model');

// Method to create a new voiture
exports.create = (req, res) => {
    // Validate request
    if(!req.body) {
        return res.status(400).send({
            message: "Voiture content can not be empty"
        });
    }

    // Create a new voiture
    const voiture = new Voiture({
        marque: req.body.marque,
        modele: req.body.modele,
        annee: req.body.annee
    });

    // Save voiture in the database
    voiture.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the voiture."
        });
    });
};
