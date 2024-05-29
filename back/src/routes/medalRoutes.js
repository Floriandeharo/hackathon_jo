const express = require('express');
const router = express.Router();
const medalController = require('../controllers/medalController'); // Change the import statement to use the correct casing

router.get('/', medalController.getAllMedals);
router.get('/:id', medalController.getMedalById);

module.exports = router;
