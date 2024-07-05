import React, { useEffect, useRef, useState } from 'react';
import { Form } from '@bpmn-io/form-js';
import '@bpmn-io/form-js/dist/assets/form-js.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ViewForm = () => {
  const { id } = useParams();
  const divRef = useRef(null);
  const formViewer = useRef(null);
  const [formSchema, setFormSchema] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/forms/${id}`)
      .then(response => {
        setFormSchema(response.data.schema);
      })
      .catch(err => {
        console.error('Failed to fetch form:', err);
      });
  }, [id]);

  useEffect(() => {
    const div = divRef.current;
    if (div && formSchema) {
      formViewer.current = new Form({
        container: div,
        schema: formSchema,
      });
      formViewer.current.importSchema(formSchema).then(() => {
        formViewer.current.get('eventBus').fire('form.show');
      });
    }
    return () => {
      formViewer.current?.destroy();
      formViewer.current = null;
    };
  }, [formSchema]);

  return (
    <div>
      <h2>View Form</h2>
      <div id="container" ref={divRef}></div>
    </div>
  );
};

export default ViewForm;
