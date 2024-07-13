const client = require('../db');

const saveBpmnProcess = async (xmlData, steps) => {
  const result = await client.query(
    'INSERT INTO process (xml_data, steps) VALUES ($1, $2) RETURNING *',
    [xmlData, JSON.stringify(steps)]
  );
  return result.rows[0];
};

const getBpmnProcesses = async () => {
  const result = await client.query('SELECT * FROM process');
  return result.rows;
};

const getBpmnProcessById = async (id) => {
  const result = await client.query('SELECT * FROM process WHERE id = $1', [id]);
  return result.rows[0];
};

const updateBpmnProcessById = async (id, xmlData, steps) => {
  const result = await client.query(
    'UPDATE process SET xml_data = $1, steps = $2 WHERE id = $3 RETURNING *',
    [xmlData, JSON.stringify(steps), id]
  );
  return result.rows[0];
};

const deleteBpmnProcessById = async (id) => {
  const result = await client.query('DELETE FROM process WHERE id = $1 RETURNING *', [id]);
  return result.rows[0];
};

const patchBpmnProcessStepForm = async (processId, stepId, formId) => {
  const processResult = await client.query('SELECT * FROM process WHERE id = $1', [processId]);
  const process = processResult.rows[0];
  if (!process) {
    throw new Error('Process not found');
  }

  const steps = process.steps.map(step => {
    if (step.id === stepId) {
      return { ...step, form: formId };
    }
    return step;
  });

  const result = await client.query(
    'UPDATE process SET steps = $1 WHERE id = $2 RETURNING *',
    [JSON.stringify(steps), processId]
  );
  return result.rows[0];
};


module.exports = {
  saveBpmnProcess,
  getBpmnProcesses,
  getBpmnProcessById,
  updateBpmnProcessById,
  deleteBpmnProcessById,
  patchBpmnProcessStepForm,
};
