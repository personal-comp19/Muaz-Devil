import React from 'react';
import { useNavigate } from 'react-router-dom';

function SuccessPage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Form Submitted Successfully!</h1>
      <button onClick={() => navigate('/')}>Go Back to Form</button>
    </div>
  );
}

export default SuccessPage;
