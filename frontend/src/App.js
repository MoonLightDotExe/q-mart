
import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer/Footer'
import Item from './components/Item/Item'


import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return <div >
    <>
     <Navbar/>
      
     <Item/>
    
     <Footer/>
    </>
  </div>

}

export default App
