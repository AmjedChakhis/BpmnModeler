import React, { useEffect, useRef, useState } from 'react';
import BpmnJS from 'bpmn-js/dist/bpmn-modeler.development.js';
import 'bpmn-js/dist/assets/diagram-js.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const BpmnModelerComponent = () => {
  const canvasRef = useRef(null);
  const modelerRef = useRef(null);
  const navigate = useNavigate();
  const { id } = useParams(); // Get process ID from URL parameters
  const [selectedElement, setSelectedElement] = useState(null);
  const [taskName, setTaskName] = useState('');

  useEffect(() => {
    modelerRef.current = new BpmnJS({
      container: canvasRef.current,
      keyboard: {
        bindTo: window
      }
    });

    if (id) {
      fetchProcess(id);
    } else {
      const diagramUrl = 'https://raw.githubusercontent.com/bpmn-io/bpmn-js-examples/master/properties-panel/resources/newDiagram.bpmn';
      axios.get(diagramUrl).then(response => {
        openDiagram(response.data);
      }).catch(err => {
        console.error('Failed to load BPMN diagram:', err);
      });
    }

    return () => {
      if (modelerRef.current) {
        modelerRef.current.destroy();
        modelerRef.current = null;
      }
    };
  }, [id]);

  const fetchProcess = async (processId) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/bpmn/process/${processId}`);
      openDiagram(response.data.xml_data);
    } catch (error) {
      console.error('Failed to fetch BPMN process:', error);
    }
  };

  const openDiagram = (bpmnXML) => {
    modelerRef.current.importXML(bpmnXML).then(() => {
      const canvas = modelerRef.current.get('canvas');
      const eventBus = modelerRef.current.get('eventBus');
      const elementRegistry = modelerRef.current.get('elementRegistry');
      const modeling = modelerRef.current.get('modeling');

      canvas.zoom('fit-viewport');

      eventBus.on('element.click', function(event) {
        const element = event.element;
        if (element.type === 'bpmn:Task') {
          setSelectedElement(element);
          setTaskName(element.businessObject.name || '');
        } else {
          setSelectedElement(null);
          setTaskName('');
        }
      });
    }).catch(err => {
      console.error('could not import BPMN 2.0 diagram', err);
    });
  };

  const handleNameChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleSaveName = () => {
    if (selectedElement) {
      const modeling = modelerRef.current.get('modeling');
      modeling.updateLabel(selectedElement, taskName);
    }
  };

  const exportDiagram = () => {
    modelerRef.current.saveXML({ format: true }).then(result => {
      const { xml } = result;
      saveBpmnProcess(xml);
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
      {selectedElement && (
        <div>
          <input
            type="text"
            value={taskName}
            onChange={handleNameChange}
            placeholder="Enter task name"
          />
          <button onClick={handleSaveName}>Save Task Name</button>
        </div>
      )}
      <button onClick={exportDiagram} style={{ padding: '10px', marginTop: '20px' }}>Save Process</button>
    </div>
  );
};

export default BpmnModelerComponent;
