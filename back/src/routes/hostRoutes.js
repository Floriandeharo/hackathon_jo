// hostsRoutes.js
const express = require('express');
const router = express.Router();
const hostsController = require('../controllers/hostsController');

router.get('/', hostsController.getAllHosts);
router.get('/:id', hostsController.getHostById);

module.exports = router;
