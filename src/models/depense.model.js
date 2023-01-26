const mongoose = require("mongoose");
const { Schema } = mongoose;

const depenseSchema = new Schema({
    motif: {
        type: String,
        required: true,
        enum: ["Salaire", "Loyer", "Achat de pièce", "Autres dépenses"]
    },
    date: {
        type: Date,
        required: true
    },
    montant: {
        type: Number,
        required: true,
        decimal: true,
        decimals: 2 
    }
});

module.exports = mongoose.model("Depense", depenseSchema);