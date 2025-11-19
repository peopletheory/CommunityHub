const express = require('express');
const { check } = require('express-validator');

const clientController = require('../controllers/clientController.js');

const router = express.Router();

router.get('/', clientController.test);

router.post("/getClientID", clientController.getClientID);
router.post("/addClient", clientController.addClient);

module.exports = router;
