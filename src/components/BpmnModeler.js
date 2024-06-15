import React, { useEffect, useRef } from 'react';
import BpmnJS from 'bpmn-js/dist/bpmn-modeler.development.js';
import 'bpmn-js/dist/assets/diagram-js.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css';
import axios from 'axios';

const BpmnModelerComponent = () => {
  const canvasRef = useRef(null);
  const modelerRef = useRef(null);

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
      const overlays = modelerRef.current.get('overlays');

      canvas.zoom('fit-viewport');

      overlays.add('SCAN_OK', 'note', {
        position: {
          bottom: 0,
          right: 0
        },
        html: '<div class="diagram-note">Mixed up the labels?</div>'
      });

      canvas.addMarker('SCAN_OK', 'needs-discussion');
    }).catch(err => {
      console.error('could not import BPMN 2.0 diagram', err);
    });
  };

  const exportDiagram = () => {
    modelerRef.current.saveXML({ format: true }).then(result => {
      const { xml } = result;
      alert('Diagram exported. Check the developer tools!');
      console.log('DIAGRAM', xml);
    }).catch(err => {
      console.error('could not save BPMN 2.0 diagram', err);
    });
  };

  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div ref={canvasRef} style={{ width: '80%', height: '80%', border: '1px solid #ccc' }}></div>
      <button onClick={exportDiagram} style={{ padding: '10px', marginTop: '20px' }}>Print to Console</button>
    </div>
  );
};

export default BpmnModelerComponent;
