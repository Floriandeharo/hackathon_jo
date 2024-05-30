// hostsRoutes.js
const express = require('express');
const router = express.Router();
const cleanHostController = require('../controllers/cleanHostController');

router.get('/', cleanHostController.getAllHosts);
router.get('/:id', cleanHostController.getHostById);


module.exports = router;
