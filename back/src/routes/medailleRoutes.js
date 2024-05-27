const express = require('express');
const router = express.Router();
const medailleController = require('../controllers/medailleController'); // Change the import statement to use the correct casing

router.get('/', medailleController.getAllMedals);
router.get('/:id', medailleController.getMedalById);
router.post('/', medailleController.createMedal);
router.put('/:id', medailleController.updateMedal);
router.delete('/:id', medailleController.deleteMedal);

module.exports = router;
