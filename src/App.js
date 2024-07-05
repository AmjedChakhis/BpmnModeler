import React, { useState } from 'react';
import BpmnModelerComponent from './components/BpmnModeler';
import FormEditorComponent from './components/FormGenerator';
import BpmnProcessList from './components/BpmnProcessList';
import BpmnViewerComponent from './components/BpmnViewer';
import LandingPage from './components/LandingPage';
import './App.css';  // Ensure you import the CSS file
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BpmnModifier from './components/BpmnModifier';
import FormsList from './components/FormsList';
import ViewForm from './components/ViewForm';

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
    <Router>
      <div className="App">
        <h1>Process and Form Creator</h1>
        <div className="editor-container">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/modeler/:id" element={<BpmnModifier  />} />
            <Route path="/modeler" element={<BpmnModelerComponent onSave={handleSaveDiagram} />} />
            <Route path="/processes" element={<BpmnProcessList />} />
            <Route path="/processes/:id" element={<BpmnViewerComponent />} />
            <Route path="/form/:taskName" element={<FormEditorComponent onSave={handleSaveForm} />} />
            <Route path="/forms" element={<FormsList />} />
            <Route path="/form/view/:id" element={<ViewForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
