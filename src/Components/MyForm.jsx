import React, { useState } from 'react';
import './MyForm.css';

function MyForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log('Form Data Submitted:', { firstName, lastName, dob, email, mobile });
  };

  const handleReset = () => {
    setFirstName('');
    setLastName('');
    setDob('');
    setEmail('');
    setMobile('');
    setSubmitted(false);
  };

  return (
    <div className='Form'>
      <h1>HTML Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            placeholder='Enter your first name'
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
           placeholder='Enter your last name'
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Date of Birth:
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            placeholder='Enter your email ID'
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Mobile Number:
          <input
            type="tel"
            value={mobile}
            placeholder='Enter your Mobile Number'
            onChange={(e) => setMobile(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">SUBMIT</button>
        <button type="button" onClick={handleReset}>
          RESET
        </button>
      </form>
       {submitted && <p className="success-message">Form has been submitted!</p>}


    </div>
  );
}

export default MyForm;
