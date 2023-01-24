// const mongoose = require('mongoose');
// const Reparation = require('path/to/reparation.model');

// class ReparationService {
//     // Create reparation
//     static async create(reparation) {
//         try {
//             return await Reparation.create(reparation);
//         } catch (err) {
//             throw err;
//         }
//     }

//     // Retrieve all reparations
//     static async findAll() {
//         try {
//             return await Reparation.find({});
//         } catch (err) {
//             throw err;
//         }
//     }

//     // Retrieve reparation by id
//     static async findOne(id) {
//         try {
//             return await Reparation.findById(id);
//         } catch (err) {
//             throw err;
//         }
//     }

//     // Update reparation by id
//     static async update(id, data) {
//         try {
//             return await Reparation.findByIdAndUpdate(id, data, { new: true });
//         } catch (err) {
//             throw err;
//         }
//     }

//     // Delete reparation by id
//     static async delete(id) {
//         try {
//             return await Reparation.findByIdAndRemove(id);
//         } catch (err) {
//             throw err;
//         }
//     }

//     static async ajoutDetail(id, details) {
//         try {
//             const reparation = await Reparation.findById(id);
//             reparation.details.push(details);
//             return await reparation.save();
//         } catch (err) {
//             throw err;
//         }
//     }

//     static async changerStatutPaiement(id) {
//         try {
//             const reparation = await Reparation.findById(id);
//             reparation.paye = "OK";
//             return await reparation.save();
//         } catch (err) {
//             throw err;
//         }
//     }
// }

// module.exports = ReparationService;