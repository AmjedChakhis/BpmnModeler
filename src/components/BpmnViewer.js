import React, { useEffect, useRef, useCallback } from 'react';
import BpmnViewer from 'bpmn-js/lib/NavigatedViewer';
import 'bpmn-js/dist/assets/diagram-js.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const BpmnViewerComponent = () => {
  const viewerRef = useRef(null);
  const containerRef = useRef(null);
  const { id } = useParams();
  const navigate = useNavigate();

  console.log('BpmnViewerComponent rendered'); // Log to confirm rendering

  const fetchProcess = useCallback(async (processId) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/bpmn/process/${processId}`);
      openDiagram(response.data.xml_data);
    } catch (error) {
      console.error('Failed to fetch BPMN process:', error);
    }
  }, []);

  useEffect(() => {
    if (id) {
      fetchProcess(id);
    }

    return () => {
      if (viewerRef.current) {
        viewerRef.current.destroy();
      }
    };
  }, [id, fetchProcess]);

  const openDiagram = (bpmnXML) => {
    if (containerRef.current) {
      viewerRef.current = new BpmnViewer({
        container: containerRef.current,
        width: '100%',
        height: '100%',
        zoom: 'fit-viewport',
      });

      viewerRef.current.importXML(bpmnXML).then(() => {
        const canvas = viewerRef.current.get('canvas');
        canvas.zoom('fit-viewport');
      }).catch(err => {
        console.error('could not import BPMN 2.0 diagram', err);
      });
    }
  };

  const handleModifyClick = () => {
    console.log('Modify button clicked'); // Log to confirm button click
    navigate(`/modeler/${id}`);
  };

  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div ref={containerRef} style={{ width: '80%', height: '80%', border: '1px solid #ccc' }}></div>
      <button onClick={handleModifyClick} style={{ padding: '10px', marginTop: '20px' }}>Modify Process</button>
    </div>
  );
};

export default BpmnViewerComponent;
