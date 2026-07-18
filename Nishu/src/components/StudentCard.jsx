import React from 'react';
import './StudentCard.css'; 

function StudentCard({ student, onDelete }) {
  return (
    <div className="student-card">
      <img 
        className="student-avatar"
        alt={student.first_name} 
      />
      <h3 className="student-name">{student.first_name} {student.last_name}</h3>
      <p className="student-email">{student.email}</p>
      
      <button className="remove-btn" onClick={() => onDelete(student.id)}>
        Remove Student
      </button>
    </div>
  );
}

export default StudentCard;