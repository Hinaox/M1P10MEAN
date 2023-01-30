const express = require("express");
const reparation = require("../models/reparation.model");
const createReparation = require("../services/reparation.service");

const router = express.Router();
const reparation = require('../models/reparation.model');

router.post("/reparation/setDetailStatus", setDetailStatus);
router.post("/reparation/addDetail", addDetail);

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
