import React, { useState, useEffect } from 'react';
import StudentCard from './components/StudentCard';
import StudentForm from './components/StudentForm';
import Pagination from './components/Pagination';
import './App.css';

function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  
  
  const ITEMS_PER_PAGE = 1;
 
  useEffect(() => {
    const fetchStudents = async () => {
      setLoading(true);
      try {
        const response = await api.get('/users?per_page=12');
        setStudents(response.data.data);
      } catch (err) {
        setStudents([
          { id: 1, first_name: "Amit", last_name: "Sharma", email: "amit@navgurukul.org",  },
          { id: 2, first_name: "Priya", last_name: "Verma", email: "priya@navgurukul.org",  },
          { id: 3, first_name: "Rahul", last_name: "Kumar", email: "rahul@navgurukul.org",  },
          { id: 4, first_name: "Neha", last_name: "Singh", email: "neha@navgurukul.org", }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  const handleAddStudent = (newStudent) => {
    const freshStudent = {
      id: Date.now(),
      ...newStudent,
      
    };
    setStudents([freshStudent, ...students]);
    setCurrentPage(1); 
  };

  const handleDeleteStudent = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  
  const currentStudents = students.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(students.length / ITEMS_PER_PAGE);

  return (
    <div className="app-container">
      <h1 className="app-title"> Student Management Dashboard</h1>
      <StudentForm onAddStudent={handleAddStudent} />

      
      <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages || 1} 
        onPageChange={(newPage) => setCurrentPage(newPage)} 
      />

      
     
        <div className="student-list-container">
          {currentStudents.map(student => (
            <StudentCard 
              key={student.id} 
              student={student} 
              onDelete={handleDeleteStudent} 
            />
          ))}
        </div>
    </div>
  );
}

export default App;