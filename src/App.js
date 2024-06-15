import React, { useState } from 'react';
import BpmnModelerComponent from './components/BpmnModeler';
import FormEditorComponent from './components/FormGenerator';
import './App.css';  // Ensure you import the CSS file

const App = () => {
  const [savedDiagram, setSavedDiagram] = useState(null);
  const [savedForm, setSavedForm] = useState(null);
  const [formData, setFormData] = useState(null);

  const handleSaveDiagram = (xml) => {
    console.log('Saved BPMN Diagram:', xml);
    setSavedDiagram(xml);
    // Optional: Send the BPMN data to the server or save it locally
  };

  const handleSaveForm = (schema) => {
    console.log('Saved Form Schema:', schema);
    setSavedForm(schema);
    setFormData({
      creditor: 'John Doe Company'
    });
    // Optional: Send the form data to the server or save it locally
  };

  return (
    <div className="App">
      <h1>Process and Form Creator</h1>
      <div className="editor-container">
        <div className="editor">
          <h2>Process Modeler</h2>
          <BpmnModelerComponent onSave={handleSaveDiagram} />
        </div>
        <div className="editor">
          <h2>Form Editor</h2>
          <FormEditorComponent onSave={handleSaveForm} />
        </div>
      </div>
    </div>
  );
};

export default App;
