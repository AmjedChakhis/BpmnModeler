import React from 'react';
import { useNavigate } from 'react-router-dom';

const TasksList = ({ steps }) => {
  const navigate = useNavigate();

  const viewStep = (stepId) => {
    console.log(`Viewing step: ${stepId}`);
    // Navigation or any other functionality can be added here
  };

  return (
    <div className="sidebar">
      <h2>Steps</h2>
      <ul>
        {steps.map(step => (
          <li key={step.id}>
            <button onClick={() => viewStep(step.id)}>{step.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TasksList;
