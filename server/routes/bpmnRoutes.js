const express = require('express');
const router = express.Router();
const bpmnController = require('../controllers/bpmnController');

router.post('/save', bpmnController.saveBpmnProcess);
router.get('/list', bpmnController.getBpmnProcesses);
router.get('/process/:id', bpmnController.getBpmnProcessById);
router.put('/process/:id', bpmnController.updateBpmnProcessById);
router.delete('/process/:id', bpmnController.deleteBpmnProcessById);

module.exports = router;
