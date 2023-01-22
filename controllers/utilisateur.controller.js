const User = require('../models/user.model');

exports.create = (req, res) => {
    // Valider les données de la requête
    if(!req.body) {
        return res.status(400).send({
            message: "Les données ne peuvent pas être vides"
        });
    }

    // Créer une nouvelle instance de l'entité utilisateur
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    // Enregistrer l'utilisateur dans la base de données
    user.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Une erreur est survenue lors de la création de l'utilisateur."
        });
    });
};

exports.findAll = (req, res) => {
    User.find()
    .then(users => {
        res.send(users);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Une erreur est survenue lors de la récupération des utilisateurs."
        });
    });
};
