const express = require('express');
const app = express();
const routes = require('./routes');

// Middleware pour analyser le JSON
app.use(express.json());

// Utiliser les routes
app.use('/api', routes);

// Middleware de gestion des erreurs pour les routes non trouvées
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

// Middleware de gestion des erreurs pour toutes les autres erreurs
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

// Définir le port (vous pouvez définir le port directement ici)
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
