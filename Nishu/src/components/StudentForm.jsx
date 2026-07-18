import React, { useState } from 'react';
import './StudentForm.css'; 

function StudentForm({ onAddStudent }) {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!firstName || !email) {
      setError('Both Name and Email are required!');
      return;
    }
    
    setError('');
    onAddStudent({ first_name: firstName, email: email });
    setFirstName('');
    setEmail('');
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h3 className="form-title">Add New Student</h3>
      {error && <p className="error-message">{error}</p>}
      
      <div className="input-group">
        <input 
          className="form-input"
          type="text" 
          placeholder="First Name" 
          value={firstName} 
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input 
          className="form-input"
          type="email" 
          placeholder="Email Address" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button className="submit-btn" type="submit">
        Register Student
      </button>
    </form>
  );
}

export default StudentForm;