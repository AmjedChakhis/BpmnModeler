const formSubmissionsModel = require('../models/formSubmissionsModel');

const saveFormSubmission = async (req, res) => {
    const { formId, processId, stepId, submissionData } = req.body;
    console.log("Received submission data:", submissionData); // Log received data
    try {
      const savedSubmission = await formSubmissionsModel.saveFormSubmission(formId, processId, stepId, submissionData);
      res.status(201).json(savedSubmission);
    } catch (err) {
      console.error('Failed to save form submission:', err.message);
      res.status(500).send('Server error');
    }
  };
  

const getFormSubmissions = async (req, res) => {
  const { formId } = req.params;
  try {
    const submissions = await formSubmissionsModel.getFormSubmissions(formId);
    res.status(200).json(submissions);
  } catch (err) {
    console.error('Failed to fetch form submissions:', err.message);
    res.status(500).send('Server error');
  }
};

module.exports = {
  saveFormSubmission,
  getFormSubmissions
};
