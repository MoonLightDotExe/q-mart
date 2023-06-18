
import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer/Footer'
import Item from './components/Item/Item'
import Shop from './components/Shop/Shop'
import { AiOutlineShopping  } from "react-icons/ai";
import Pagination from './components/Pagination/Pagination'


import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return <div >
    <>
    hi
    <Pagination/>
    {/* <Routes>
      <Route path="/Shop"element={<Shop/>}/>
    </Routes> */}
     {/* <Navbar/>
      
     <Item/>
    
     <Footer/> */}
     </>
    
  </div>

}

export default App
