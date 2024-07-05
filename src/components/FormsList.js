import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FormsList = () => {
  const [forms, setForms] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/api/forms')
      .then(response => {
        setForms(response.data);
      })
      .catch(err => {
        console.error('Failed to fetch forms:', err);
      });
  }, []);

  const viewForm = (id) => {
    navigate(`/form/view/${id}`);
  };

  return (
    <div>
      <h2>Forms List</h2>
      <ul>
        {forms.map(form => (
          <li key={form.id}>
            <button onClick={() => viewForm(form.id)}>View Form {form.id}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FormsList;
