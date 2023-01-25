
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();
// import User service
const User = require('../services/utilisateur.service');

// create login route
router.post('/loginProcess', (req, res) => {
    // find the user by email
    User.findOne({ email: req.body.email }, (err, user) => {
        if (err) {
            return res.status(500).json({
                title: "Une erreur s'est produite",
                error: err
            });
        }
        if (!user) {
            return res.status(401).json({
                title: 'Connexion échouée',
                error: { message: 'Email ou Mot de passe érroné!' }
            });
        }
        // compare the provided password with the hashed password in the database
        bcrypt.compare(req.body.password, user.password, (err, isMatch) => {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            if (!isMatch) {
                return res.status(401).json({
                    title: "Une erreur s'est produite",
                    error: { message: 'Email ou Mot de passe érroné!' }
                });
            }
            // create and assign a JSON web token
            const token = jwt.sign({ userId: user._id }, 'secretkey', { expiresIn: 3600*24 });
            res.status(200).json({
                message: 'Successfully logged in',
                token: token,
                userId: user._id
            });
        });
    });
});

router.post('/inscriptionProcess', (req, res) => {
    // hash password
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
            return res.status(500).json({
                title: "Une erreur s'est produite",
                error: err
            });
        }
        // create new user with hashed password
        const newUser = new User({
            nom: req.body.nom,
            email: req.body.email,
            password: hash,
            role: req.body.role
        });
        // save new user
        newUser.save((err, result) => {
            if (err) {
                return res.status(500).json({
                    title: "Une erreur s'est produite",
                    error: err
                });
            }
            res.status(201).json({
                message: 'Utilisateur crée avec succès',
                obj: result
            });
        });
    });
});




module.exports = router;