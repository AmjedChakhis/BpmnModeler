import React from 'react';
import { useNavigate } from 'react-router-dom';

const TasksList = ({ steps, processId }) => {
  const navigate = useNavigate();

  const handleStepClick = (step) => {
    if (step.form) {
      navigate(`/form/view/${step.form}`, { state: { processId, stepId: step.id } });
    } else {
      navigate(`/form/${step.id}`, { state: { processId, stepId: step.id } });
    }
  };

  return (
    <div className="sidebar">
      <h2>Steps</h2>
      <ul>
        {steps.map(step => (
          <li key={step.id}>
            <button onClick={() => handleStepClick(step)}>{step.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TasksList;
