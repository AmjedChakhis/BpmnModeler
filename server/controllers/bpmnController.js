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

const updateBpmnProcessById = async (req, res) => {
  const { id } = req.params;
  const { xmlData } = req.body;
  try {
    const updatedProcess = await bpmnModel.updateBpmnProcessById(id, xmlData);
    if (!updatedProcess) {
      return res.status(404).send('Process not found');
    }
    res.status(200).json(updatedProcess);
  } catch (err) {
    console.error('Failed to update BPMN Process:', err.message);
    res.status(500).send('Server error');
  }
};

const deleteBpmnProcessById = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedProcess = await bpmnModel.deleteBpmnProcessById(id);
    if (!deletedProcess) {
      return res.status(404).send('Process not found');
    }
    res.status(200).json(deletedProcess);
  } catch (err) {
    console.error('Failed to delete BPMN Process:', err.message);
    res.status(500).send('Server error');
  }
};

module.exports = {
  saveBpmnProcess,
  getBpmnProcesses,
  getBpmnProcessById,
  updateBpmnProcessById,
  deleteBpmnProcessById,
};
