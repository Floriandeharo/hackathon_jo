const express = require('express');
const router = express.Router();
const cleanMedalController = require('../controllers/cleanMedalController'); // Change the import statement to use the correct casing

router.get('/', cleanMedalController.getAllMedals);
router.get('/:id', cleanMedalController.getMedalById);
router.get('/medals/GoldCountry',cleanMedalController.GoldMedalByCountry);
router.get('/medals/TotalCountry',cleanMedalController.MedalByCountry);
router.get('/medals/ByDiscipline', cleanMedalController.MedalByDiscipline);
router.get('/medals/ByAthlete', cleanMedalController.MedalByAthlete);
router.get('/medals/ByYear', cleanMedalController.getMedalsByYear);
router.get('/medals/BySeasonAndType', cleanMedalController.getMedalsBySeasonAndType);
router.get('/medals/ByParticipantAndType', cleanMedalController.getMedalsByParticipantAndType);
router.get('/medals/ByGender', cleanMedalController.getTypeMedalsByGender);

module.exports = router;
