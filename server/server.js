const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../build')));

app.post('/save-bpmn', (req, res) => {
  const { xml } = req.body;
  fs.writeFileSync(path.join(__dirname, '../public/bpmn/diagram.bpmn'), xml);
  res.send({ status: 'BPMN diagram saved' });
});

app.post('/save-form', (req, res) => {
  const { formSchema } = req.body;
  fs.writeFileSync(path.join(__dirname, '../public/forms/form-schema.json'), JSON.stringify(formSchema, null, 2));
  res.send({ status: 'Form schema saved' });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
