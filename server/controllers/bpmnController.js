const bpmnModel = require('../models/bpmnModel');

const saveBpmnProcess = async (req, res) => {
  const { xmlData } = req.body;

  try {
    const savedProcess = await bpmnModel.saveBpmnProcess(xmlData);
    res.status(201).json(savedProcess);
  } catch (err) {
    console.error('Failed to save BPMN Process:', err.message);
    res.status(500).send('Server error');
  }
};

module.exports = {
  saveBpmnProcess,
};
