import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

import './App.css'

function App() {
  return (
    <div className='login-page'>
      <Router>
        <Routes>
          <Route path="/login" Component={Login} element={<Login />} />
          <Route path="/register" Component={Register} element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App

// git pull origin master