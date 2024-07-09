import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import BpmnViewer from 'bpmn-js/lib/Viewer';
import { useNavigate } from 'react-router-dom';
import 'bpmn-js/dist/assets/diagram-js.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css';

const BpmnProcessList = () => {
  const [processes, setProcesses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProcesses();
  }, []);

  const fetchProcesses = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/bpmn/list');
      setProcesses(response.data);
    } catch (error) {
      console.error('Failed to fetch BPMN processes:', error);
    }
  };

  const handleProcessClick = (id) => {
    navigate(`/processes/${id}`);
  };

  const handleModifyProcess = (id) => {
    navigate(`/modeler/${id}`);
  };

  const handleDeleteProcess = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/bpmn/process/${id}`);
      setProcesses(processes.filter(process => process.id !== id));
    } catch (error) {
      console.error('Failed to delete BPMN process:', error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>BPMN Processes</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {processes.map((process) => (
          <BpmnProcessThumbnail
            key={process.id}
            process={process}
            onClick={() => handleProcessClick(process.id)}
            onModify={() => handleModifyProcess(process.id)}
            onDelete={() => handleDeleteProcess(process.id)}
          />
        ))}
      </div>
    </div>
  );
};

const BpmnProcessThumbnail = ({ process, onClick, onModify, onDelete }) => {
  const viewerRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (process && process.xml_data && containerRef.current) {
      if (!viewerRef.current) {
        viewerRef.current = new BpmnViewer({
          container: containerRef.current,
          width: 300,
          height: 200,
        });
      }

      viewerRef.current.importXML(process.xml_data).catch((err) => {
        console.error('Failed to render BPMN process:', err);
      });

      return () => {
        if (viewerRef.current) {
          viewerRef.current.destroy();
          viewerRef.current = null;
        }
      };
    }
  }, [process]);

  return (
    <div style={{ margin: '10px', cursor: 'pointer' }}>
      <div ref={containerRef} style={{ border: '1px solid #ccc' }} onClick={onClick} />
      <div style={{ textAlign: 'center' }}>
        <span>Process {process.id}</span>
        <button onClick={onDelete} style={{ marginLeft: '10px', padding: '5px' }}>Delete</button>
        <button onClick={onModify} style={{ marginLeft: '10px', padding: '5px' }}>Modify</button>
      </div>
    </div>
  );
};

export default BpmnProcessList;
