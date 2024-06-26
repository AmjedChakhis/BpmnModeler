import React, { useEffect, useRef } from 'react';
import BpmnJS from 'bpmn-js/dist/bpmn-modeler.development.js';
import 'bpmn-js/dist/assets/diagram-js.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BpmnModelerComponent = ({ onSave }) => {
  const canvasRef = useRef(null);
  const modelerRef = useRef(null);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    modelerRef.current = new BpmnJS({
      container: canvasRef.current,
      keyboard: {
        bindTo: window
      }
    });

    const diagramUrl = 'https://raw.githubusercontent.com/bpmn-io/bpmn-js-examples/master/properties-panel/resources/newDiagram.bpmn';

    axios.get(diagramUrl).then(response => {
      console.log('BPMN XML fetched successfully:', response.data);
      openDiagram(response.data);
    }).catch(err => {
      console.error('Failed to load BPMN diagram:', err);
    });

    return () => {
      if (modelerRef.current) {
        modelerRef.current.destroy();
      }
    };
  }, []);

  const openDiagram = (bpmnXML) => {
    modelerRef.current.importXML(bpmnXML).then(() => {
      const canvas = modelerRef.current.get('canvas');
      const eventBus = modelerRef.current.get('eventBus');

      canvas.zoom('fit-viewport');

      eventBus.on('element.click', function(event) {
        const element = event.element;
        const { type, businessObject } = element;

        if (type === 'bpmn:Task') {
          const taskName = businessObject.name;
          navigate(`/form/${taskName}`);
        }
      });

    }).catch(err => {
      console.error('could not import BPMN 2.0 diagram', err);
    });
  };

  const exportDiagram = () => {
    modelerRef.current.saveXML({ format: true }).then(result => {
      const { xml } = result;
      saveBpmnProcess(xml); // Save the BPMN process to the server
    }).catch(err => {
      console.error('could not save BPMN 2.0 diagram', err);
    });
  };

  const saveBpmnProcess = (xml) => {
    axios.post('http://localhost:5000/api/bpmn/save', { xmlData: xml })
      .then(response => {
        console.log('BPMN Process saved successfully:', response.data);
        alert('BPMN Process saved successfully!');
      })
      .catch(err => {
        console.error('Failed to save BPMN Process:', err);
        alert('Failed to save BPMN Process.');
      });
  };

  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div ref={canvasRef} style={{ width: '80%', height: '80%', border: '1px solid #ccc' }}></div>
      <button onClick={exportDiagram} style={{ padding: '10px', marginTop: '20px' }}>Save Process</button>
    </div>
  );
};

export default BpmnModelerComponent;
