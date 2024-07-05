const express = require('express');
const router = express.Router();
const formsController = require('../controllers/formsController');

router.post('/', formsController.saveForm);
router.get('/', formsController.getForms);
router.get('/:id', formsController.getFormById);

module.exports = router;
