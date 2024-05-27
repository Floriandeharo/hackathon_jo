const express = require('express');
const router = express.Router();
const resultsController = require('../controllers/resultsController');

// Routes pour les résultats
router.get('/', resultsController.getAllResults);
router.get('/:id', resultsController.getResultById);
router.post('/', resultsController.createResult);
router.put('/:id', resultsController.updateResult);
router.delete('/:id', resultsController.deleteResult);

module.exports = router;
