import React, { useState } from 'react';
import StudentCard from './components/StudentCard';
import StudentForm from './components/StudentForm';
import './App.css';

function App() {
  const [students, setStudents] = useState([]);

  const handleAddStudent = (newStudent) => {
    const freshStudent = {
      id: Date.now(), 
      ...newStudent,
    };
    setStudents([freshStudent, ...students]);
  };

  const handleDeleteStudent = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Student Management Dashboard</h1>
      
      <StudentForm onAddStudent={handleAddStudent} />

      {students.length > 0 ? (
        <div className="student-list-container">
          {students.map(student => (
            <StudentCard 
              key={student.id} 
              student={student} 
              onDelete={handleDeleteStudent} 
            />
          ))}
        </div>
      ) : (
        <p style={{ textAlign: 'center', marginTop: '30px', color: '#666' }}>
          No students added yet. Please add a student using the form above.
        </p>
      )}
    </div>
  );
}

export default App;