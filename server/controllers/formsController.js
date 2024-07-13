const formsModel = require('../models/formsModel.js');
const bpmnModel = require('../models/bpmnModel.js');

const saveForm = async (req, res) => {
  const { schema, processId, stepId } = req.body;

  try {
    const savedForm = await formsModel.saveForm(schema);
    const updatedProcess = await bpmnModel.patchBpmnProcessStepForm(processId, stepId, savedForm.id);
    res.status(201).json({ form: savedForm, process: updatedProcess });
  } catch (err) {
    console.error('Failed to save form and link to step:', err.message);
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

const updateFormById = async (req, res) => {
  const { id } = req.params;
  const { schema } = req.body;
  try {
    const updatedForm = await formsModel.updateFormById(id, schema);
    if (!updatedForm) {
      return res.status(404).send('Form not found');
    }
    res.status(200).json(updatedForm);
  } catch (err) {
    console.error('Failed to update form:', err.message);
    res.status(500).send('Server error');
  }
};

const deleteFormById = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedForm = await formsModel.deleteFormById(id);

    // Remove the form reference from the process steps
    const processes = await bpmnModel.getBpmnProcesses();
    for (let process of processes) {
      let updated = false;
      const steps = process.steps.map(step => {
        if (step.form === id) {
          step.form = null;
          updated = true;
        }
        return step;
      });
      if (updated) {
        await bpmnModel.updateBpmnProcessById(process.id, process.xml_data, steps);
      }
    }

    if (!deletedForm) {
      return res.status(404).send('Form not found');
    }
    res.status(200).json(deletedForm);
  } catch (err) {
    console.error('Failed to delete form:', err.message);
    res.status(500).send('Server error');
  }
};

module.exports = {
  saveForm,
  getForms,
  getFormById,
  updateFormById,
  deleteFormById,
};
