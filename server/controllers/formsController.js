const formsModel = require('../models/formsModel.js');

const saveForm = async (req, res) => {
  const { schema } = req.body;

  try {
    const savedForm = await formsModel.saveForm(schema);
    res.status(201).json(savedForm);
  } catch (err) {
    console.error('Failed to save form:', err.message);
    res.status(500).send('Server error');
  }
};

const getForms = async (req, res) => {
  try {
    const forms = await formsModel.getForms();
    res.status(200).json(forms);
  } catch (err) {
    console.error('Failed to fetch forms:', err.message);
    res.status(500).send('Server error');
  }
};

const getFormById = async (req, res) => {
  const { id } = req.params;
  try {
    const form = await formsModel.getFormById(id);
    if (!form) {
      return res.status(404).send('Form not found');
    }
    res.status(200).json(form);
  } catch (err) {
    console.error('Failed to fetch form:', err.message);
    res.status(500).send('Server error');
  }
};

module.exports = {
  saveForm,
  getForms,
  getFormById,
};
