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
