import React, { useState } from 'react';
import './StudentForm.css';

function StudentForm({ onAddStudent }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !email) {
      alert("Please fill out First Name and Email!");
      return;
    }

    onAddStudent({
      first_name: firstName,
      last_name: lastName,
      email: email
    });

    setFirstName('');
    setLastName('');
    setEmail('');
  };

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="First Name" 
        value={firstName} 
        onChange={(e) => setFirstName(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Last Name" 
        value={lastName} 
        onChange={(e) => setLastName(e.target.value)} 
      />
      <input 
        type="email" 
        placeholder="Email Address" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <button type="submit" className="add-btn">Add Student</button>
    </form>
  );
}

export default StudentForm;