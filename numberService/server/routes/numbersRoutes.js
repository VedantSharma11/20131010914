const express = require('express');
const numbersController = require('../controllers/numbersController');
const router = express.Router();

router.get('/', numbersController.getNumbers);

module.exports = router;
