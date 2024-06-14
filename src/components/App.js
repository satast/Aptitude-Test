import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login';
import Main from './main'; // Assuming Main is your main page component
import './App.css';

function App() {
  const isAuthenticated = !!localStorage.getItem('authToken'); // Example auth check

  return (
    <div className='body'>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/main" element={isAuthenticated ? <Main /> : <Navigate to="/login" />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
