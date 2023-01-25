const User = require('../models/utilisateur.model');
const mongoose = require('mongoose');
class UserService {
    // Create user
    static async create(user) {
        try {
            return await User.create(user);
        } catch (err) {
            throw err;
        }
    }

    // Retrieve all users
    static async findAll() {
        try {
            return await User.find({});
        } catch (err) {
            throw err;
        }
    }

    // Retrieve user by id
    static async findOne(id) {
        try {
            return await User.findById(id);
        } catch (err) {
            throw err;
        }
    }

    // Update user by id
    static async update(id, data) {
        try {
            return await User.findByIdAndUpdate(id, data, { new: true });
        } catch (err) {
            throw err;
        }
    }

    // Delete user by id
    static async delete(id) {
        try {
            return await User.findByIdAndRemove(id);
        } catch (err) {
            throw err;
        }
    }
}

module.exports = UserService;