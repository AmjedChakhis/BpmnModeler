const client = require('../db');

const saveForm = async (schema) => {
  const result = await client.query(
    'INSERT INTO forms (schema) VALUES ($1::jsonb) RETURNING *',
    [schema]
  );
  return result.rows[0];
};

const getForms = async () => {
  const result = await client.query('SELECT * FROM forms');
  return result.rows;
};

const getFormById = async (id) => {
  const result = await client.query('SELECT * FROM forms WHERE id = $1', [id]);
  return result.rows[0];
};

const updateFormById = async (id, schema) => {
  const result = await client.query(
    'UPDATE forms SET schema = $1::jsonb WHERE id = $2 RETURNING *',
    [schema, id]
  );
  return result.rows[0];
};

const deleteFormById = async (id) => {
  const result = await client.query('DELETE FROM forms WHERE id = $1 RETURNING *', [id]);
  return result.rows[0];
};

module.exports = {
  saveForm,
  getForms,
  getFormById,
  updateFormById,
  deleteFormById,
};
