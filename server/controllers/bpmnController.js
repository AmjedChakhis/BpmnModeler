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

const getBpmnProcesses = async (req, res) => {
  try {
    const processes = await bpmnModel.getBpmnProcesses();
    res.status(200).json(processes);
  } catch (err) {
    console.error('Failed to fetch BPMN Processes:', err.message);
    res.status(500).send('Server error');
  }
};

const getBpmnProcessById = async (req, res) => {
  const { id } = req.params;
  try {
    const process = await bpmnModel.getBpmnProcessById(id);
    if (!process) {
      return res.status(404).send('Process not found');
    }
    res.status(200).json(process);
  } catch (err) {
    console.error('Failed to fetch BPMN Process:', err.message);
    res.status(500).send('Server error');
  }
};

module.exports = {
  saveBpmnProcess,
  getBpmnProcesses,
  getBpmnProcessById,
};
