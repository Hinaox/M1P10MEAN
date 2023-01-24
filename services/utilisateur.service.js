const User = require('../models/utilisateur.model');

module.export = findUser = async (nom) => {
    return await User.find({ nom });
}

module.export = find = async () => {
    return await User.find({},);
}