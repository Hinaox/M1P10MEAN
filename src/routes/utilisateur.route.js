
const express = require('express');
const mongoose = require('mongoose');
const crypto = require('crypto-js');
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
      console.log(compare(crypto.SHA256(req.body.mdp).toString(), user.motDePasse));
      if (compare(crypto.SHA256(req.body.mdp).toString(), user.motDePasse) === false) {
        return res.status(401).json({
          title: "Mauvais mot de passe",
          message: 'Email ou Mot de passe érroné!'
        });
      }

      const token = jwt.sign({ userId: user._id, role: user.role }, 'secretkey', { expiresIn: 3600 * 24 });

      console.log("token:" + token);
      return res.status(200).json({
        valide: 'Successfully logged in',
        token: token,
        idUser: user._id,
        role: user.role
      });
    });
});

router.post("/registerProcess", (req, res) => {
  // hash password
  let hash = crypto.SHA256(req.body.mdp).toString();
  const newUser = new User({
    nom: req.body.nom,
    email: req.body.email,
    motDePasse: hash,
    role: 'client',
  });
  console.log(newUser);
  newUser.save().then((user) => {
    return res.status(200).json({
      registered: "User created",
      message: "Vous avez bien été inscrit. Connectez-vous! ",
    });
  }).catch((err) => {
    return res.status(500).json({
      title: "Une erreur s'est produite",
      error: err,
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

const compare = (password1, password2) => {
  return password2 === password1;
};



module.exports = router;