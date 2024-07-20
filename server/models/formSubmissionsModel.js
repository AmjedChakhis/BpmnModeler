const client = require('../db');

const saveFormSubmission = async (formId, processId, stepId, submissionData) => {
  const result = await client.query(
    'INSERT INTO form_submissions (form_id, process_id, step_id, submission_data) VALUES ($1, $2, $3, $4) RETURNING *',
    [formId, processId, stepId, JSON.stringify(submissionData)]
  );
  return result.rows[0];
};

const getFormSubmissions = async (formId) => {
  const result = await client.query('SELECT * FROM form_submissions WHERE form_id = $1', [formId]);
  return result.rows;
};

module.exports = {
  saveFormSubmission,
  getFormSubmissions
};
