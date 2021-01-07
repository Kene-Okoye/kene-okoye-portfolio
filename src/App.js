import React from 'react';
import Home from './Components/Home/Home';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/AboutMe/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Portfolio from './Components/Portfolio/Portfolio';


const App = () => {

  return (
    <>
      <div className='container'>
        <Home/>
        <Navbar/>
        <About/>
        <Portfolio />
        <Contact/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
