import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import smallCard from './components/smallCard/smallCard'
import bigCard from './components/bigCard/bigCard'
import Carousel from './components/Carousel/Carousel'

import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            Component={smallCard}
          />
          <Route
            path="/bc"
            Component={bigCard}
          />
          <Route
            path="/carousel"
            Component={Carousel}
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App
