const mongoose = require('mongoose');
const { Schema } = mongoose;

const paiementSchema = new Schema({
    reparation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Reparation",
    },
    montant: {
        type: number,
        decimal : true,
        decimals:  2 
    },
    date:{
        type: Date,
        required: false
    }
});


module.exports = mongoose.model('paiement', paiementSchema);