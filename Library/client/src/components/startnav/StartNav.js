import React from 'react'
import { Link } from "react-router-dom";
import '../startnav/Startnav.css'

const StartNav = () => {
  return (
    <div className='start-nav'>
      <Link to='/'><h2>Logo</h2></Link>
      <h2>LIBRARY MANAGEMENT SYSTEM</h2>
    </div>
  )
}

export default StartNav
