const express = require('express');
const router = express.Router();

const medalRoutes = require('./medalRoutes');  // Ajoutez cette ligne
const athleteRoutes = require('./athleteRoutes'); // Ajoutez cette ligne
const cleanAthleteRoutes = require('./cleanAthleteRoutes'); // Ajoutez cette ligne
const hostRoutes = require('./hostRoutes'); // Ajoutez cette ligne
const resultsRoutes = require('./resultsRoutes'); // Ajoutez cette ligne
const cleanMedalRoutes = require('./cleanMedalRoutes'); // Ajoutez cette ligne
const cleanHostRoutes = require('./cleanHostRoutes'); // Ajoutez cette ligne


router.use('/medals', medalRoutes);  // Ajoutez cette ligne
router.use('/cleanMedals', cleanMedalRoutes);  // Ajoutez cette ligne
router.use('/athletes', athleteRoutes); // Ajoutez cette ligne
router.use('/cleanAthletes', cleanAthleteRoutes); // Ajoutez cette ligne
router.use('/hosts', hostRoutes); // Ajoutez cette ligne
router.use('/results', resultsRoutes); // Ajoutez cette ligne
router.use('/cleanHosts', cleanHostRoutes); // Ajoutez cette ligne


module.exports = router;
