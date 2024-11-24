// backend/controllers/authController.js

const User = require('../models/User');
const bcrypt = require('bcrypt');  // Ajoutez bcrypt pour hacher le mot de passe

// Fonction pour l'inscription
const signUpUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Vérifier si l'email existe déjà
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email déjà utilisé' });
    }

    // Hacher le mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // Créer un nouvel utilisateur
    const newUser = new User({
      username,
      email,
      password: hashedPassword,  // Utiliser le mot de passe haché
    });

    // Sauvegarder l'utilisateur dans la base de données
    await newUser.save();

    res.status(201).json({
      message: 'Utilisateur enregistré avec succès',
      user: { id: newUser._id, username: newUser.username, email: newUser.email },
    });
  } catch (error) {
    console.error('Erreur lors de l\'inscription :', error);
    res.status(500).json({ message: 'Erreur du serveur' });
  }
};

module.exports = { signUpUser };
