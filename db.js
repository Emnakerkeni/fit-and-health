const mysql = require('mysql2');
require('dotenv').config(); // Charge les variables d'environnement depuis .env

// Crée une connexion à la base de données MySQL avec les données de .env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});

// Teste la connexion à la base de données
connection.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données: ' + err.stack);
    return;
  }
  console.log('Connecté à la base de données MySQL avec l\'ID ' + connection.threadId);
});

module.exports = connection; // Exporte la connexion pour l'utiliser dans d'autres fichiers
