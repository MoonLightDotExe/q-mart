

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
