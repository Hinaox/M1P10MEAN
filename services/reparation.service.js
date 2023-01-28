const repair = require("../models/reparation.model");

module.exports = createReparation = async (idV, desc) => {
  try {
    let reparation = await repair.create({
      voiture: idV,
      paye: false,
      description: desc,
    });
    return reparation;
  } catch (err) {
    console.log('in rep = '+err.message);
    return {
      message: err.message,
      description: "error = error",
    };
  }
};
