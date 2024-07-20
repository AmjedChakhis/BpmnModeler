import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Form } from '@bpmn-io/form-js';
import '@bpmn-io/form-js/dist/assets/form-js.css';
import axios from 'axios';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

const ViewForm = () => {
  const { id } = useParams();
  const location = useLocation();
  const { processId, stepId } = location.state || {};
  const navigate = useNavigate();
  const divRef = useRef(null);
  const formViewer = useRef(null);
  const [formSchema, setFormSchema] = useState(null);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:5000/api/forms/${id}`)
      .then(response => {
        setFormSchema(response.data.schema);
      })
      .catch(err => {
        console.error('Failed to fetch form:', err);
      });
  }, [id]);

  const handleSubmit = useCallback(async (submittedData) => {
    console.log("Form Data on Submit:", submittedData); // Log form data to verify
    try {
      await axios.post('http://localhost:5000/api/form_submissions', {
        formId: id,
        processId,
        stepId,
        submissionData: submittedData
      });
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Failed to submit form:', error);
      alert('Failed to submit form.');
    }
  }, [id, processId, stepId]);

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

      formViewer.current.on('changed', (event) => {
        console.log('Form data changed:', event.data); // Log form data changes
        setFormData(event.data);
      });

      formViewer.current.on('submit', (event) => {
        event.preventDefault();
        handleSubmit(event.data);
      });
    }
    return () => {
      formViewer.current?.destroy();
      formViewer.current = null;
    };
  }, [formSchema, handleSubmit]);

  const handleModifyClick = () => {
    navigate(`/form/${id}`, { state: { processId, stepId } });
  };

  const handleDeleteClick = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/forms/${id}`);
      alert('Form deleted successfully');
      navigate('/forms'); // Redirect to forms list
    } catch (error) {
      console.error('Failed to delete form:', error);
      alert('Failed to delete form');
    }
  };

  return (
    <div>
      <h2>View Form</h2>
      <div id="container" ref={divRef}></div>
      <button onClick={handleModifyClick} style={{ padding: '10px', marginTop: '20px' }}>Modify Form</button>
      <button onClick={handleDeleteClick} style={{ padding: '10px', marginTop: '20px', marginLeft: '10px' }}>Delete Form</button>
      <button onClick={() => handleSubmit(formData)} style={{ padding: '10px', marginTop: '20px', marginLeft: '10px' }}>Submit</button>
    </div>
  );
};

export default ViewForm;
