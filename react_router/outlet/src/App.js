import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
 import Home from './components/pages/Home';
 import Contact from './components/pages/Contact';
 import About from './components/pages/About';
import Layout from './components/Layout';
import Post from './components/pages/Post'

function App(){

  
  return (
    <>
  <Router>
  
  <Routes>
  <Route path="/" element={<Layout/>}>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/post" element={<Post/>}/>
  {/* index will share the path of the parent that / */}
    <Route index element={<Home/>}/>




     </Route>
    </Routes>
  
  
  </Router>
  
  </>

  )
  
}

export default App;