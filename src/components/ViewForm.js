import React, { useEffect, useRef, useState } from 'react';
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
    </div>
  );
};

export default ViewForm;
