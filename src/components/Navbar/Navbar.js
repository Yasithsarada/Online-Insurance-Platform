import React from 'react'
import { Link } from 'react-router-dom'
import '../Navbar/Navbar.css'


const Navbar = () => {
  return (
  <>
    <div className="upper-menu">
        <img src={require('../../images/skull.png')} className="skull" alt=''/>
        <a href="https://www.google.com/" ><button className="upper-btn">Check Offers</button></a>
        <a href="https://www.google.com/" ><button className="upper-btn">Pay Premium Online</button></a>
        <input type="text" className="search"  />
        <i className="fa-solid fa-magnifying-glass search-icon" placeholder="Search"></i>
    </div>

    <header className="header">
        <label className="logo">Logo</label>
        <nav>
            <input type="checkbox" id="checkbox_toggle" placeholder="Search" />
            <label for="checkbox_toggle" className="hamburger">&#9776;</label>
            <ul className="nav-links menu">
                <Link to='/'><button className="cta">Home</button></Link>
                <a href="https://www.google.com/"><button className="cta">News</button></a>
                <a href="https://www.google.com/"><button className="cta">About us</button></a>        
                <a href="https://www.google.com/"><button className="cta">Contact us</button></a>        
                <Link to='/InsurancePlans'><button className="cta">Insurance Plans</button></Link>     
                <Link to='/Authentication'><button className="cta" id='login-btn'>Login / Register</button></Link>    
           </ul>
        </nav>
    </header>
   
    
  </>
  )
}

export default Navbar