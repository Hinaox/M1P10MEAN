const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    nom: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    motDePasse: { type: String, required: true },
    role: { type: String, required: true }
});

mongoose.set('useFindAndModify', false);
module.exports = mongoose.model('Utilisateur', userSchema);
