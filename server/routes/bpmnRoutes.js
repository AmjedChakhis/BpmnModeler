const express = require('express');
const router = express.Router();
const bpmnController = require('../controllers/bpmnController');

router.post('/save', bpmnController.saveBpmnProcess);

module.exports = router;
