import React, { useEffect, useRef } from 'react';
import BpmnJS from 'bpmn-js/dist/bpmn-modeler.development.js';
import 'bpmn-js/dist/assets/diagram-js.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const BpmnModifier = () => {
  const canvasRef = useRef(null);
  const modelerRef = useRef(null);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    modelerRef.current = new BpmnJS({
      container: canvasRef.current,
      keyboard: {
        bindTo: window
      }
    });

    if (id) {
      fetchProcess(id);
    }

    return () => {
      if (modelerRef.current) {
        modelerRef.current.destroy();
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
      updateBpmnProcess(xml);
    }).catch(err => {
      console.error('could not save BPMN 2.0 diagram', err);
    });
  };

  const updateBpmnProcess = (xml) => {
    axios.put(`http://localhost:5000/api/bpmn/process/${id}`, { xmlData: xml })
      .then(response => {
        console.log('BPMN Process updated successfully:', response.data);
        alert('BPMN Process updated successfully!');
        navigate('/processes'); // Navigate back to the process list after saving
      })
      .catch(err => {
        console.error('Failed to update BPMN Process:', err);
        alert('Failed to update BPMN Process.');
      });
  };

  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div ref={canvasRef} style={{ width: '80%', height: '80%', border: '1px solid #ccc' }}></div>
      <button onClick={exportDiagram} style={{ padding: '10px', marginTop: '20px' }}>Save Process</button>
    </div>
  );
};

export default BpmnModifier;
