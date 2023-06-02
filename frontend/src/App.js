import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AiOutlineBars } from 'react-icons/ai'
import { useContext } from 'react'

import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Navbar from './components/Navbar'
import Footer from './components/Footer/Footer'
import userContext from './context/userContext'

import './App.css'

function App() {
  const { sidebar, setSidebar } = useContext(userContext)

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
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
