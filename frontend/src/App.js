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
      <Navbar />

      <Routes>
        <Route
          path='/'
          element={<Login />}
        ></Route>
        <Route
          path='/login'
          element={<Login />}
        ></Route>
        <Route
          path='/register'
          element={<Register />}
        ></Route>
        <Route
          path='/*'
          element={<NotFound />}
        ></Route>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
