import React, { useEffect, useRef, useState } from "react";
import { FormEditor } from "@bpmn-io/form-js";
import "@bpmn-io/form-js/dist/assets/form-js.css";
import "@bpmn-io/form-js/dist/assets/form-js-editor.css";
import '../App.css';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';

export default function FormEditorComponent({ onSave }) {
  const { taskName } = useParams();
  const { state } = useLocation();
  const { processId, stepId } = state || {};
  const divRef = useRef(null);
  const formEditor = useRef(null);
  const [value, setValue] = useState(
    JSON.stringify({
      type: "default",
      components: [],
    })
  );

  useEffect(() => {
    const div = divRef.current;
    if (!div) return;
    formEditor.current = new FormEditor({
      container: div,
      additionalModules: [],
    });
    return () => {
      formEditor.current?.destroy();
      formEditor.current = null;
    };
  }, []);

  useEffect(() => {
    const editor = formEditor.current;
    if (editor) {
      const handler = () => {
        if (value !== JSON.stringify(editor.getSchema())) {
          setValue(JSON.stringify(editor.getSchema()));
        }
      };
      editor.on("changed", handler);
      return () => {
        editor.off("changed", handler);
      };
    }
  }, [value]);

  useEffect(() => {
    const editor = formEditor.current;
    if (editor && JSON.stringify(editor.getSchema()) !== value) {
      editor.importSchema(JSON.parse(value)).then(() => {
        setValue(JSON.stringify(editor.getSchema()));
      });
    }
  });

  const saveForm = async () => {
    if (formEditor.current) {
      const schema = formEditor.current.getSchema();

      try {
        const response = await axios.post('http://localhost:5000/api/forms', {
          schema,
          processId,
          stepId
        });
        console.log('Form and process updated successfully:', response.data);
        alert('Form and process updated successfully!');
      } catch (error) {
        console.error('Failed to save form and update process:', error);
        alert('Failed to save form and update process.');
      }
    }
  };

  return (
    <div className="editor-container">
      <h2>Form for Step: {taskName}</h2>
      <div id="container" ref={divRef}></div>
      <button onClick={saveForm} style={{ padding: '10px', marginTop: '20px' }}>Save Form</button>
    </div>
  );
}
