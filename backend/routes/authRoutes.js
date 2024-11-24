// backend/routes/authRoutes.js
const express = require('express');
const User = require('../models/User');  // Vérifiez que le chemin vers User.js est correct
const router = express.Router();

// Route d'inscription
router.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: 'Email déjà utilisé' });
    }

    const newUser = new User({
      username,
      email,
      password
    });

    await newUser.save();
    res.status(201).json({ message: 'Utilisateur créé avec succès' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

// Vous pouvez ajouter d'autres routes comme la connexion ici

module.exports = router;
