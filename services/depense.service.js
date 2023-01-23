const mongoose = require('mongoose');
const Depense = require('../models/depense.model');

class DepenseService {
    // Create depense
    static async create(depense) {
        try {
            return await Depense.create(depense);
        } catch (err) {
            throw err;
        }
    }

    // Retrieve all depenses
    static async findAll() {
        try {
            return await Depense.find({});
        } catch (err) {
            throw err;
        }
    }

    // Retrieve depense by id
    static async findOne(id) {
        try {
            return await Depense.findById(id);
        } catch (err) {
            throw err;
        }
    }

    // Update depense by id
    static async update(id, data) {
        try {
            return await Depense.findByIdAndUpdate(id, data, { new: true });
        } catch (err) {
            throw err;
        }
    }

    // Delete depense by id
    static async delete(id) {
        try {
            return await Depense.findByIdAndRemove(id);
        } catch (err) {
            throw err;
        }
    }
}

module.exports = DepenseService;