
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Footer from './components/Footer/Footer.jsx'

import NotFound from './pages/NotFound/NotFound'

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