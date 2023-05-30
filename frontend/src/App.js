// import React from 'react'
import React, { useRef } from 'react';
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'

function App() {
  return (
    <div className='login-page'>
      <Router>
        <Routes>
          <Route path="/login" Component={Login} element={<Login />} />
          <Route path="/register" Component={Login} element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App

// npm run client when in q-mart 
