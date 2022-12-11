import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Navbar from './components/Navbar';
import Post from './components/pages/Post'

function App(){
  return (
    <>
  <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/post/:category" element={<Post/>}/>
      <Route path="/post/:category/:id" element={<Post/>}/>

      <Route path="*" element={<h1>Element Not Found Error 404</h1>}/>


      </Routes>
  
  
  </Router>
  
  </>

  )
  
}

export default App;