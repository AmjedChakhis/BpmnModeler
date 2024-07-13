const express = require('express');
const router = express.Router();
const formsController = require('../controllers/formsController');
const bpmnController = require('../controllers/bpmnController');

router.post('/', bpmnController.saveFormAndLinkStep);
router.post('/', formsController.saveForm);
router.get('/', formsController.getForms);
router.get('/:id', formsController.getFormById);
router.put('/:id', formsController.updateFormById);
router.delete('/:id', formsController.deleteFormById); 


module.exports = router;
