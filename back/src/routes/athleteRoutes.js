const express = require('express');
const router = express.Router();
const athleteController = require('../controllers/athleteController');

// Routes pour les athlètes
router.get('/', athleteController.getAllAthletes);
router.get('/:id', athleteController.getAthleteById);
router.get('/athletes/participation', athleteController.getAthleteParticipation);
module.exports = router;
