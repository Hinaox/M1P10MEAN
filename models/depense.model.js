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

mongoose.set('useFindAndModify', false);
module.exports = mongoose.model("Depenses", depenseSchema);