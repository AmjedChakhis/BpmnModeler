const { Client } = require('pg');
const client = new Client({
  user: 'postgres',
  password: 'admin123',
  host: 'localhost',
  port: '5432',
  database: 'bpmn-modeler',
});

client
  .connect()
  .then(() => {
    console.log('Connected to PostgreSQL database');

    client.query('SELECT steps FROM process', (err, res) => {
      if (err) {
        console.error('Error executing query', err.stack);
      } else {
        console.log('Rows in process table:', res.rows);
      }
    });
  })
  .catch((err) => {
    console.error('Error connecting to PostgreSQL database', err);
  });

module.exports = client;
