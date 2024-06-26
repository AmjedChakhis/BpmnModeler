const client = require('../db');

const saveBpmnProcess = async (xmlData) => {
  const result = await client.query(
    'INSERT INTO process (xml_data) VALUES ($1) RETURNING *',
    [xmlData]
  );
  return result.rows[0];
};

module.exports = {
  saveBpmnProcess,
};
