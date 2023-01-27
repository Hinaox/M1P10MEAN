
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();
// import User service
const User = require('../models/utilisateur.model');
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// create login route
router.post('/loginProcess', (req, res) => {
    // find the user by email
    User.findOne({ email: req.body.email }, (err, user) => {
      console.log(req.body.email);
        if (err) {
            return res.status(500).json({
                title: "Une erreur s'est produite",
                error: err
            });
        }
        if (!user) {
            return res.status(401).json({
                title: 'Connexion échouée',
                message: "L'adresse email n'existe pas" 
            });
        }
        // compare the provided password with the hashed password in the database
      bcrypt.compare(req.body.mdp, user.motDePasse, (err, isMatch) => {
            if (err) {
                return res.status(500).json({
                    title: "Une erreur s'est produite",
                    message: "Erreur",
                    error: err
                });
            }
            if (!isMatch) {
              console.log(isMatch+"test test");
                return res.status(401).json({
                    title: "Une erreur s'est produite",
                    message: 'Email ou Mot de passe érroné!' 
                });
            }
            // create and assign a JSON web token
          const token = jwt.sign({ userId: user._id, role: user.role }, 'secretkey', { expiresIn: 3600*24 });
          console.log("token:"+token);
          return res.status(200).json({
                message: 'Successfully logged in',
                token: token,
                userId: user._id
            });
        });
    });
});

router.post("/inscriptionProcess", (req, res) => {
  // hash password
  bcrypt.hash(req.password, 10, (err, hash) => {
    if (err) {
      return res.status(500).json({
        title: "Une erreur s'est produite",
        error: err,
      });
    }
    // create new user with hashed password
    const newUser = new User({
      nom: req.nom,
      email: req.email,
      password: hash,
      role: req.role,
    });
    // save new user
    newUser.save((err, result) => {
      if (err) {
        return res.status(500).json({
          title: "Une erreur s'est produite",
          error: err,
        });
      }
      res.status(201).json({
        message: "Utilisateur crée avec succès",
        obj: result,
      });
    });
  });
});

router.get("/nom/:name", (req, res) => {
  User.findOne({ nom: req.params.name }, (err, utilisateur) => {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    }
    return res.status(200).send(utilisateur);
  });
});

router.post("/test", (req, res) => {
  console.log(req.body.mdp);
  console.log(req.body.email);
  return res.status(200).send("test fini");
});



module.exports = router;