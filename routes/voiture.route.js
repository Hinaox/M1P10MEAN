const voiture = require('../services/voiture.service.js');

const express = require('express');
const router = express.Router();

exports.voitureRoutes = router()
router.get('/',voiture.findAllCars);
