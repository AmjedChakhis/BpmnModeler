import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Welcome to the Process and Form Creator</h1>
      <div style={{ marginTop: '20px' }}>
        <button
          onClick={() => navigate('/modeler')}
          style={{ padding: '10px 20px', margin: '10px' }}
        >
          Create Process
        </button>
        <button
          onClick={() => navigate('/processes')}
          style={{ padding: '10px 20px', margin: '10px' }}
        >
          List of Processes
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
