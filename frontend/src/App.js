import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer/Footer'
import  { useEffect, useState } from 'react';

const App = () => {
  const [scrolled, setScrolled] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className='app-container'>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
       <Navbar/>

      </header>
        <footer>
       <Footer/>
      </footer>
    </div>
  )
}

export default App
