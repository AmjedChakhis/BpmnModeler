const bpmnModel = require('../models/bpmnModel');
const xml2js = require('xml2js');

const saveBpmnProcess = async (req, res) => {
  const { xmlData } = req.body;

  try {
    // Parse the BPMN XML
    const parser = new xml2js.Parser();
    const parsedXml = await parser.parseStringPromise(xmlData);

    // Extract steps from parsed XML
    const steps = extractStepsFromParsedXml(parsedXml);

    // Save the BPMN process with steps
    const savedProcess = await bpmnModel.saveBpmnProcess(xmlData, steps);
    res.status(201).json(savedProcess);

    // Log the rows in the process table to the console
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
      name: task.$.name
    });
  });

  return steps;
};

const logProcessTable = async () => {
  try {
    const processes = await bpmnModel.getBpmnProcesses();
    processes.forEach(process => {
      console.log('Process ID:', process.id);
      console.log('XML Data:', process.xml_data);
      console.log('Steps:', JSON.stringify(process.steps, null, 2));
    });
  } catch (err) {
    console.error('Failed to fetch processes for logging:', err.message);
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

module.exports = {
  saveBpmnProcess,
  getBpmnProcesses,
  getBpmnProcessById,
  updateBpmnProcessById,
  deleteBpmnProcessById,
};
