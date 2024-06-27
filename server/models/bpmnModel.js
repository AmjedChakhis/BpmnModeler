const client = require('../db');

const saveBpmnProcess = async (xmlData) => {
  const result = await client.query(
    'INSERT INTO process (xml_data) VALUES ($1) RETURNING *',
    [xmlData]
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

module.exports = {
  saveBpmnProcess,
  getBpmnProcesses,
  getBpmnProcessById,
};
