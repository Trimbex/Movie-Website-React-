import React from 'react'
import { Link } from 'react-router-dom';


export default function navBar() {
  return (
    <div style={{  display: 'flex', justifyContent: 'space-around', padding: 20, backgroundColor: 'rgb(245, 245, 245)'}}>
        
       <Link to="/">Home</Link>
       <Link to="/About">About</Link>
       <Link to="/contact-us">Contact Us</Link>
       <Link to="/add-movie">Add Movie</Link>
    </div>
  )
}
