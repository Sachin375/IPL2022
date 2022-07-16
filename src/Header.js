import React from 'react'
import "./Header.css"
import { BsSearch } from 'react-icons/bs';
import {Link} from 'react-router-dom';
function Header() {
  return (
    <div className='header'>
    <div className='header-first'>
    <Link to="/" className='link'>
    <img src='https://www.iplt20.com/assets/images/ipl-logo-new-old.png'></img>
    </Link>
    <Link to="/" className='link'>
    <div>Home</div>
  </Link>

  <Link to="/matches" className='link'>
   <div>Matches</div>
  </Link>
  <Link to="/point" className='link'>
   <div>Points Table</div>
  </Link>
  <Link to="/about" className='link'>
  <div>About</div>
  </Link>
  
    </div>
    
  <div className='header-second'>
  <input type="text"/>
  <BsSearch className='search'/>
  </div>
  
    </div>
  )
}

export default Header