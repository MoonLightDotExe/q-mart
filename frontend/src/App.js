import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Footer from './components/Footer/Footer.jsx'
import Mcarousel from './components/Mcarousel/Mcarousel'
import { Data } from './data/mCarousel'
import NotFound from './pages/NotFound/NotFound'
import Checkout from './pages/Checkout/Checkout'
import User from './pages/User/User'
import Admin from './pages/Admin/Admin'

import './App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path='/'
          Component={Login}
          element={<Login />}
        />
        <Route
          path='/main'
          element={<Mcarousel slides={Data} />}
        />
        <Route
          path='/register'
          Component={Register}
          element={<Register />}
        />
        <Route
          path='/checkout'
          element={<Checkout />}
        />
        <Route
          path='/user'
          element={<User />}
        />
        <Route
          path='/admin'
          element={<Admin />}
        />
        <Route
          path='/*'
          element={<NotFound />}
        />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
