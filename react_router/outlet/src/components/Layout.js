import React from 'react';
import {  NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
   <>
   <h1>React Router</h1>
   <ul>
    {/* <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/contact">Contact</Link></li> */}
       <li><NavLink to="/" style={({isActive}) =>{return {backgroundColor: isActive ? 'red': ''}}}>Home</NavLink></li>
       <li><NavLink to="/about">About</NavLink></li>
       <li><NavLink to="/contact">Contact</NavLink></li>
       <li><NavLink to="/post">Post</NavLink></li>
       
   </ul>
   <Outlet/>
   </>
  )
}

export default Layout;

