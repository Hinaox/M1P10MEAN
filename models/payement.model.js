const mongoose = require('mongoose');
const { Schema } = mongoose;

const payementSchema = new Schema({
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

mongoose.set('useFindAndModify', false);
module.exports = mongoose.model('Utilisateurs', payementSchema);