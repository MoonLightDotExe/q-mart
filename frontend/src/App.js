import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import smallCard from './components/smallCard/smallCard'

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
        </Routes>
      </Router>
    </div>
  )
}

export default App
