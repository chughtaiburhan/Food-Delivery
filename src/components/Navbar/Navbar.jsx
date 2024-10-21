import React, { useCallback, useContext, useState } from 'react'
import "./Navbar.css";
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

function Navbar({setShowLogin}) {
    const [menu,setMenu] = useState('Home')
    const {getTotalAmount} = useContext(StoreContext);
  return (
    <div className='Navbar'>
    <Link to='/'>
    <img src={assets.logo} alt=""  className='logo'/>
    </Link>
    <ul className="navbar_menu">
        <Link to='/' onClick={() => setMenu('Home')} className={menu === 'Home' ? 'active' : ''}>Home</Link>
        <a href='#explore-menu' onClick={() => setMenu('Menu')} className={menu === 'Menu' ? 'active' : ''}>Menu</a>
        <a href='#app-download' onClick={() => setMenu('Mobile-App')} className={menu === 'Mobile-App' ? 'active' : ''}>Mobile-App</a>
        <a href='#footer' onClick={() => setMenu('Contact Us')} className={menu === 'Contact Us' ? 'active' : ''}>Contact Us</a>
    </ul>
    <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to='/cart'>
          <img src={assets.bag_icon} alt="" />
          </Link>
            <div className={getTotalAmount()=== 0 ? "" : "dot"}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign in</button>
    </div>
    </div>
  )
}

export default Navbar