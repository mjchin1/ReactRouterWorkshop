import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Blue from './components/Blue';
import Red from './components/Red';
import Orange from './components/Orange';
import Sage from './components/Sage';
import Purple from './components/Purple';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';


function App() {


  return (
    <>
    <div id="container">
      <div>
        <h1 className="pageHeader">COLORS</h1>
      </div>

      <div id="navbar">
        <NavBar/>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/blue" element={<Blue/>}/>
          <Route path="/red" element={<Red/>}/>
          <Route path="/orange" element={<Orange/>}/>
          <Route path="/sage" element={<Sage/>}/>
          <Route path="/purple" element={<Purple/>}/>
        </Routes>
      </div>
      <div className="footer">
        <Footer/>
      </div>
   
    </div>
      
    </>
  )
}

export default App