import React from 'react'
import './Header.css'
import { BiSearchAlt2 as SearchIcon} from "react-icons/bi";
import {RiArrowDropDownLine as DropDownIcon} from "react-icons/ri";
import { CgProfile as Profile } from "react-icons/cg";
import { CgShoppingCart as Cart } from "react-icons/cg";

const Header = () => {

    const texts = [
        'ORDERS OF $5K SHIP FREE',
        'FREE SHIPPING ON SELECT ITEMS: SHOP NOW',
        'BUY A RIG AND YOUR ENTIRE ORDER SHIPS FREE'
      ];
      
      let currentTextIndex = 0;
      
      setInterval(() => {
        const shippingDealsText = document.querySelector('.shipping-deals-text');
        shippingDealsText.classList.add('out');
      
        setTimeout(() => {
          shippingDealsText.textContent = texts[currentTextIndex];
          shippingDealsText.classList.remove('out');
      
          currentTextIndex = (currentTextIndex + 1) % texts.length;
        }, 1000);
      }, 5000);

  return (
    <div className="main-body">
    <div className="header">
        <div className="header-top">
            <div className="top-logo">
                <h5 className='small-logo'>LEVIATHAN</h5>
            </div>
            <div className="space"></div>
            <div className="link-container">
                <div className="link-wrap">
                    <a href="/" className="gift-cards">Gift Cards</a>
                </div>
                <div className="link-wrap">
                    <a href="/" className="contact-us">Contact Us</a>
                </div>
                <div className="link-wrap">
                    <a href="/" className="order-status">Order Status</a>
                </div>
                <div className="link-wrap">
                    <a href="/" className="live-chat">Live Chat</a>
                </div>
            </div>
        </div>
        <div className="header-middle">
            <div className="middle-logo">
                <h5 className='big-logo'>LEVIATHAN</h5>
            </div>
            <div className="search-container">
                <div className="search-wrapper">
                    <input 
                        type="text" 
                        id="search-bar" 
                        placeholder="Search"
                        className='search'
                    />
                    <div className="search-icon-wrapper">
                        <SearchIcon className='search-icon'/>
                    </div>
                </div>
            </div>
            <div className="shipping-deals-container">
                <div className="button-container">
                    <div className="shipping-deals-button">
                        <span className="deals-text">DAILY SHIPPING DEALS </span>
                    </div>
                </div>
                <div className="text-container">
                    <div className="text-slideshow">
                        <p className="shipping-deals-text">BUY A RIG AND YOUR ENTIRE ORDER SHIPS FREE</p>
                    </div>
                </div>
            </div>
            <div className="icons-right">
                <div className="profile">
                    <Profile className='login-pic'/>
                </div>
                <span>Log In</span>
                <div className="cart-icon">
                    <Cart className='shopping-cart'/>
                </div>
            </div>
        </div>
        <div className="header-bottom">
            <div className="nav-bar">
                <ul className='navigation'>
                    <li className='menu-items'>
                        <a href="/" className='button drop-down red'>Shop <DropDownIcon className='drop-icon'/></a>
                    </li>
                    <li className='menu-items'>
                        <a href="/" className='button'>Equipment for Crossfit</a>
                    </li>
                    <li className='menu-items'>
                        <a href="/" className='button'>New Gear</a>
                    </li>
                    <li className='menu-items'>
                        <a href="/" className='button'>Barbells</a>
                    </li>
                    <li className='menu-items'>
                        <a href="/" className='button'>Plates</a>
                    </li>
                    <li className='menu-items'>
                        <a href="/" className='button'>Rigs and Racks</a>
                    </li>
                    <li className='menu-items'>
                        <a href="/" className='button'>Shoes</a>
                    </li>
                    <li className='menu-items'>
                        <a href="/" className='button'>Apparel</a>
                    </li>
                    <li className='menu-items'>
                        <a href="/" className='button'>3 Ships Free</a>
                    </li>
                    <li className='menu-items'>
                        <a href="/" className='button'>Zeus</a>
                    </li>
                    <li className='menu-items'>
                        <a href="/" className='button drop-down'>The Index</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Header