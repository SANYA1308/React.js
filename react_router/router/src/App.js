import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Navbar from './components/Navbar';
import Post from './components/pages/Post'
import Dashboard from './components/pages/Dashboard';
import Login from './components/pages/Login';
import Logout from './components/pages/Logout';
function App(){

  let isLogged = true;
  let data = {
    'st': 'User not logged in'
  }
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
      <Route path="/dashboard" element={isLogged ? <Dashboard/> : <Navigate to="/login" replace state={data}/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/logout" element={<Logout/>}/>

      <Route path="*" element={<h1>Element Not Found Error 404</h1>}/>


      </Routes>
  
  
  </Router>
  
  </>

  )
  
}

export default App;