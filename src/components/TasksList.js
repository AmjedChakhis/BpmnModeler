import React from 'react';
import { useNavigate } from 'react-router-dom';

const TasksList = ({ steps, processId }) => {
  const navigate = useNavigate();

  const linkStepToForm = (stepId) => {
    navigate(`/form/${stepId}`, { state: { processId, stepId } });
  };

  return (
    <div className="sidebar">
      <h2>Steps</h2>
      <ul>
        {steps.map(step => (
          <li key={step.id}>
            <button onClick={() => linkStepToForm(step.id)}>{step.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TasksList;
