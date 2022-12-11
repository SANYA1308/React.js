import React from 'react';
import {  NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
   <>
   <ul>
    {/* <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/contact">Contact</Link></li> */}
       <li><NavLink to="/" style={({isActive}) =>{return {backgroundColor: isActive ? 'red': ''}}}>Home</NavLink></li>
       <li><NavLink to="/about">About</NavLink></li>
       <li><NavLink to="/contact">Contact</NavLink></li>
       <li><NavLink to="/post/mobile">Post</NavLink></li>
       <li><NavLink to="/post/mobile/1">Post with id</NavLink></li>


   </ul>
   </>
  )
}

export default Navbar;

