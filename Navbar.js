import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='nav-bar'>
      <img className="logo"src='https://www.kovai.co/wp-content/uploads/2020/01/kovai.co-logo-500x500-1.png'
      style={{width:"100px", height:"90px"}}/>
      <div className='navdiv'>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/clubs'>Clubs</NavLink>
      <NavLink to='/events'>Events</NavLink>
      <NavLink to='/addclub'>AddClubs</NavLink>
      <NavLink to="/contactus">ContactUs</NavLink>
     
      
      </div>
      
      
    </nav>
  )
}
