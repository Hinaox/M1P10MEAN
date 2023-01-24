const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();

const User = require("../services/utilisateur.service");
const UserModel = require("../models/utilisateur.model");

// create login route
router.post("/loginProcess", (req, res) => {
  // find the user by email
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) {
      return res.status(500).json({
        title: "Une erreur s'est produite",
        error: err,
      });
    }
    if (!user) {
      return res.status(401).json({
        title: "Connexion échouée",
        error: { message: "Email ou Mot de passe érroné!" },
      });
    }
    // compare the provided password with the hashed password in the database
    bcrypt.compare(req.body.password, user.password, (err, isMatch) => {
      if (err) {
        return res.status(500).json({
          title: "An error occurred",
          error: err,
        });
      }
      if (!isMatch) {
        return res.status(401).json({
          title: "Une erreur s'est produite",
          error: { message: "Email ou Mot de passe érroné!" },
        });
      }
      // create and assign a JSON web token
      const token = jwt.sign({ userId: user._id }, "secretkey", {
        expiresIn: 3600 * 24,
      });
      res.status(200).json({
        message: "Successfully logged in",
        token: token,
        userId: user._id,
      });
    });
  });
});

router.post("/inscriptionProcess", (req, res) => {});

router.get("/utilisateurs", (req, res) => {
    UserModel.find({}, (err, voiture) => {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    }
    return res.status(200).send(voiture);
  });
});

router.get("/utilisateurs/nom/:name", (req, res) => {
    UserModel.findOne({nom:req.params.name}, (err, voiture) => {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    }
    return res.status(200).send(voiture);
  });
});

module.exports = router;
