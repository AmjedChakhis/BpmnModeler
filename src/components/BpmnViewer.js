import React, { useEffect, useRef, useCallback, useState } from 'react';
import BpmnViewer from 'bpmn-js/lib/NavigatedViewer';
import 'bpmn-js/dist/assets/diagram-js.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import TasksList from './TasksList';

const BpmnViewerComponent = () => {
  const viewerRef = useRef(null);
  const containerRef = useRef(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const [steps, setSteps] = useState([]);

  const fetchProcess = useCallback(async (processId) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/bpmn/process/${processId}`);
      const process = response.data;
      openDiagram(process.xml_data);
      const stepsData = process.steps;
      console.log('Retrieved steps:', stepsData);
      setSteps(stepsData);
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
        viewerRef.current = null;
      }
    };
  }, [id, fetchProcess]);

  const openDiagram = (bpmnXML) => {
    if (containerRef.current) {
      if (!viewerRef.current) {
        viewerRef.current = new BpmnViewer({
          container: containerRef.current,
          width: '100%',
          height: '100%',
          zoom: 'fit-viewport',
        });
      }

      viewerRef.current.importXML(bpmnXML).then(() => {
        const canvas = viewerRef.current.get('canvas');
        canvas.zoom('fit-viewport');
      }).catch(err => {
        console.error('could not import BPMN 2.0 diagram', err);
      });
    }
  };

  const handleModifyClick = () => {
    navigate(`/modeler/${id}`);
  };

  return (
    <>
      <div className="bpmn-viewer-container">
        <TasksList steps={steps} className="sidebar"/>
        <div ref={containerRef} className="bpmn-canvas"></div>
      </div>
      <button onClick={handleModifyClick} style={{ padding: '10px', position: 'absolute', bottom: '10px', right: '10px' }}>Modify Process</button>
    </>
  );
};

export default BpmnViewerComponent;
