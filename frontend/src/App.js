import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import Register from './pages/Register/Register';

import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" Component={Login} element={<Login />} />
        <Route path="/Main" Component={Main} element={<Main />} />
        <Route path="/register" Component={Register} element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App

// git pull origin master