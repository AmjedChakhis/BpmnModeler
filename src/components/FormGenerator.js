// src/components/FormGenerator.js
import React, { useEffect, useRef, useState } from "react";
import { FormEditor } from "@bpmn-io/form-js";
import "@bpmn-io/form-js/dist/assets/form-js.css";
import "@bpmn-io/form-js/dist/assets/form-js-editor.css";
import '../App.css';
import { useParams } from 'react-router-dom';

export default function FormEditorComponent({ onSave }) {
  const { taskName } = useParams();
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

  const saveForm = () => {
    if (formEditor.current) {
      const schema = formEditor.current.getSchema();
      onSave(schema); // Call the onSave prop to pass the schema to the parent component
    }
  };

  return (
    <div className="editor-container">
      <h2>Form for Task: {taskName}</h2>
      <div id="container" ref={divRef}></div>
      <button onClick={saveForm} style={{ padding: '10px', marginTop: '20px' }}>Save Form</button>
    </div>
  );
}
