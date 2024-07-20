const express = require('express');
const router = express.Router();
const formSubmissionsController = require('../controllers/formSubmissionsController');

router.post('/', formSubmissionsController.saveFormSubmission);
router.get('/:formId', formSubmissionsController.getFormSubmissions);

module.exports = router;
