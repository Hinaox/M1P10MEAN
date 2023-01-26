const mongoose = require('mongoose');
const { Schema } = mongoose;

const payementSchema = new Schema({
    reparation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Reparation",
    },
    montant: {
        type: Number,
        decimal : true,
        decimals:  2 
    },
    date:{
        type: Date,
        required: false
    }
});

module.exports = mongoose.model('Paiements', payementSchema);