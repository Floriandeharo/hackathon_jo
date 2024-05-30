const express = require('express');
const router = express.Router();
const medalController = require('../controllers/medalController'); // Change the import statement to use the correct casing

router.get('/', medalController.getAllMedals);
router.get('/:id', medalController.getMedalById);
router.get('/medals/GoldCountry',medalController.GoldMedalByCountry);
router.get('/medals/TotalCountry',medalController.MedalByCountry);
router.get('/medals/ByDiscipline', medalController.MedalByDiscipline);
router.get('/medals/ByAthlete', medalController.MedalByAthlete);
router.get('/medals/ByYear', medalController.getMedalsByYear);
router.get('/medals/BySeasonAndType', medalController.getMedalsBySeasonAndType);
router.get('/medals/ByParticipantAndType', medalController.getMedalsByParticipantAndType);
router.get('/medals/ByGender', medalController.getTypeMedalsByGender);
module.exports = router;
