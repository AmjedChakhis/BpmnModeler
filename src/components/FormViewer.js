import React, { useEffect, useRef } from 'react';
import { Form } from '@bpmn-io/form-js-viewer';

const FormViewer = ({ schema, formData }) => {
  const containerRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const form = new Form({
      container: containerRef.current
    });

    formRef.current = form;

    form.importSchema(schema, formData).catch(err => {
      console.error('Failed to import form schema', err);
    });

    return () => {
      form.destroy();
    };
  }, [schema, formData]);

  return <div id="form-viewer" ref={containerRef}></div>;
};

export default FormViewer;
