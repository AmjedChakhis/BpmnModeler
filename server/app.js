const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bpmnRoutes = require('./routes/bpmnRoutes');
const formsRoutes = require('./routes/formRoutes');
const formSubmissionsRoutes = require('./routes/formSubmissionsRoutes');
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/bpmn', bpmnRoutes);
app.use('/api/forms', formsRoutes);
app.use('/api/form_submissions', formSubmissionsRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
