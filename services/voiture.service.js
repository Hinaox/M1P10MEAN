const Voiture = require('../models/voiture.model');
const mongoose = require('mongoose');

class VoitureService {
    // Create voiture
    static async create(voiture) {
        try {
            return await Voiture.create(voiture);
        } catch (err) {
            throw err;
        }
exports.create = (req, res) => {
    // Validate request
    if(!req.body) {
        return res.status(400).send({
            message: "Voiture content can not be empty"
        });
    }

    // Retrieve all voitures
    static async findAll() {
        try {
            return await Voiture.find({});
        } catch (err) {
            throw err;
        }
    }

    // Retrieve voiture by id
    static async findOne(id) {
        try {
            return await Voiture.findById(id);
        } catch (err) {
            throw err;
        }
    }

    // Update voiture by id
    static async update(id, data) {
        try {
            return await Voiture.findByIdAndUpdate(id, data, { new: true });
        } catch (err) {
            throw err;
        }
    }

    // Delete voiture by id
    static async delete(id) {
        try {
            return await Voiture.findByIdAndRemove(id);
        } catch (err) {
            throw err;
        }
    }

    static async changeStatus(id, status) {
        statusTabl = ["disponible", "déposé", "en réparation", "réparé", "prêt"];
        try {
            const tempVoiture =  Voiture.findById(id);
            tempVoiture.status = statusTabl[status];
            tempVoiture.save();
        } catch (err) {
            throw err;
        }
    }
}

module.exports = VoitureService;
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

// exports.findMyCars = (req, res) => {

// };

exports.findAllCars = (req,res) => {
    Voiture.find({}).populate('utilisateur').exec((err, user) => {
    if (err) {
        res.status(500).send(err);
    } else {
        res.status(200).send(user);
    }
});
}
