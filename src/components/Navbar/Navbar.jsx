import React,{useState} from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import{MdOutlineRestaurantMenu} from 'react-icons/md';

import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const[toggleMenu, setToggleMenu] = React.useState(false);

  return (
  <nav className='app__navbar'>
    <div className='app__navbar-logo'>
      <img src={images.gericht} alt="app logo" />
    </div>
    <ul className='app__navbar-links'>
      <li className="p__opensans"><a href="#home">Accueil</a></li>
      <li className="p__opensans"><a href="#about">A propos</a></li>
      <li className="p__opensans"><a href="#menu">Menu</a></li>
      <li className="p__opensans"><a href="#awards">Prix</a></li>
      <li className="p__opensans"><a href="#contact">Contact</a></li>
    </ul>
    <div className="app__navbar-login">

    <a href="https://chat.whatsapp.com/Lj5yrOfE5q12kTcUPNvocm" target="blank" className="p__opensans">
      Groupe Watsupp 
    </a>

      {/*<a href="#login" className="p__opensans">Login / Register</a>
      <div/>
      <a href="/" className="p__opensans">Book Table</a>*/}
    </div>
    <div className="app__navbar-smallscreen">
      <GiHamburgerMenu color='#fff' fontSize={27} onClick={()=>setToggleMenu(true)}/>

      {toggleMenu && (    
      <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
        <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={()=>setToggleMenu(false)}/>
        <ul className="app__navbar-smallscreen_links">
          <li className="p__opensans">
          <a href="https://chat.whatsapp.com/Lj5yrOfE5q12kTcUPNvocm" 
              target="blank" 
              className="p__opensans watsup_groupe"
              onClick={()=>setToggleMenu(false)}>
                Groupe Watsup 
          </a>
          </li>
          <li className="p__opensans"><a href="#home" onClick={()=>setToggleMenu(false)}>Accueil</a></li>
          <li className="p__opensans"><a href="#about" onClick={()=>setToggleMenu(false)}>A propos</a></li>
          <li className="p__opensans"><a href="#menu" onClick={()=>setToggleMenu(false)}>Menu</a></li>
          <li className="p__opensans"><a href="#awards" onClick={()=>setToggleMenu(false)}>Prix</a></li>
          <li className="p__opensans"><a href="#contact" onClick={()=>setToggleMenu(false)}>Contact</a></li>
        </ul>
      </div>
      )}

    </div>
  </nav>
  )
};

export default Navbar;