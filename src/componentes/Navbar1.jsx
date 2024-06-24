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
          <ul className="navbar-menu">
            <li className="navbar-item">
            <button className='BotonMalo' type="button" onClick={decremento}>-</button>
            </li>
            <li className="navbar-item">
            <span className='spameadorNumericooNashee'>{count}</span>
            </li>
            <li className="navbar-item">
            <button className='BotonBueno' type="button" onClick={aumento}>+</button>
            </li>
          </ul>
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
