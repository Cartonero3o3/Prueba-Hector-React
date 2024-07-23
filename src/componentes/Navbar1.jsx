import React, {useState, useEffect} from 'react';
import "./Navbar1.css"

function Navbar1({ decremento, aumento, count }) {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <a href="/">Logo</a>
          </div>
          <div className='ButtonsMasters'>
          </div>
          <ul className='navbar-menu'>
            <li>objeto1</li>
            <li>objeto2</li>
            <li>objeto3</li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar1;
