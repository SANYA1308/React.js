import React from 'react'
import { useLocation } from 'react-router-dom';
const Logout = () => {
let location = useLocation();
  return (
    <>
      <h1>Logout</h1>
      <h2>{location.state.name} Logout!!</h2>
    </>
  )
}

export default Logout
