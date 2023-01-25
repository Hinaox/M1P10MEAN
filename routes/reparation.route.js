const mongoose = require('mongoose');
const router = express.Router();
const reparation = require('../services/reparation.service');

router.get("/reparations", (req, res) => {
  reparation
    .find()
    .populate("voiture")
    .exec((err, reparations) => {
      if (err) {
        console.log(err);
        return res.status(500).send(err);
      }
      return res.status(200).send(reparations);
    });
});

module.exports = router;
