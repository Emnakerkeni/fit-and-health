// Importation des modules nécessaires
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');  // Pour gérer les chemins
const authRoutes = require('./backend/routes/authRoutes');  // Chemin vers authRoutes

// Charger les variables d'environnement depuis .env
dotenv.config();

// Initialiser l'application Express
const app = express();

// Middleware pour permettre le CORS
app.use(cors());
// Middleware pour gérer les données JSON
app.use(express.json());

// Connexion à la base de données MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Database connected');
  })
  .catch((err) => {
    console.log('Database connection error:', err);
  });

// Définir les routes d'authentification
app.use('/api/auth', authRoutes);

// Servir les fichiers statiques (si vous avez un frontend séparé, ajustez cela)
app.use(express.static(path.join(__dirname, 'frontend/build')));

// Route par défaut si aucun autre n'est trouvé
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
});

// Démarrer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
