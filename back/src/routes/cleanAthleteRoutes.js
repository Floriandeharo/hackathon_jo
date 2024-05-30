const express = require('express');
const router = express.Router();
const cleanAthleteController = require('../controllers/cleanAthleteController');

// Routes pour les athlètes
router.get('/', cleanAthleteController.getAllAthletes);
router.get('/:id', cleanAthleteController.getAthleteById);
router.get('/athletes/participation', cleanAthleteController.getAthleteParticipation);
module.exports = router;
