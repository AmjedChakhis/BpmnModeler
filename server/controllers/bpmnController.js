const bpmnModel = require('../models/bpmnModel');
const formsModel = require('../models/formsModel');
const xml2js = require('xml2js');

const saveBpmnProcess = async (req, res) => {
  const { xmlData } = req.body;

  try {
    const parser = new xml2js.Parser();
    const parsedXml = await parser.parseStringPromise(xmlData);

    const steps = extractStepsFromParsedXml(parsedXml);

    const savedProcess = await bpmnModel.saveBpmnProcess(xmlData, steps);
    res.status(201).json(savedProcess);

    await logProcessTable();
  } catch (err) {
    console.error('Failed to save BPMN Process:', err.message);
    res.status(500).send('Server error');
  }
};

const extractStepsFromParsedXml = (parsedXml) => {
  const steps = [];
  const process = parsedXml['bpmn2:definitions']['bpmn2:process'][0];
  const tasks = process['bpmn2:task'] || [];

  tasks.forEach(task => {
    steps.push({
      id: task.$.id,
      name: task.$.name,
      form :""
    });
  });

  return steps;
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
    const parser = new xml2js.Parser();
    const parsedXml = await parser.parseStringPromise(xmlData);
    const steps = extractStepsFromParsedXml(parsedXml);

    const updatedProcess = await bpmnModel.updateBpmnProcessById(id, xmlData, steps);
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

const saveFormAndLinkStep = async (req, res) => {
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


module.exports = {
  saveBpmnProcess,
  getBpmnProcesses,
  getBpmnProcessById,
  updateBpmnProcessById,
  deleteBpmnProcessById,
  saveFormAndLinkStep,
};
