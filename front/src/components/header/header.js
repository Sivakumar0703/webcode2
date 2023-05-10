import React from 'react';
import  '../header/header.css'

const Header = () => {
  //const user = JSON.parse
  return (
    <div className='header'>

  <div className='header-left'>
    <img src='../header/rent.jpeg' alt='logo'/>
    <h2>ONLINE RENTAL</h2>
    </div>
    <div className='header-right'>
        <button className='login btn'>LOGIN</button>
        <button className='signup btn'>SIGNUP</button>
    </div>

    </div>
  )
}

export default Header