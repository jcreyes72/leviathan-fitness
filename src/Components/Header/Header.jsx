import React from 'react'
import './Header.css'

const Header = () => {
  return (
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
                <input 
                    type="text" 
                    id="search-bar" 
                    placeholder="Search"
                    className='search'
                />
            </div>
        </div>
        <div className="header-bottom">
            <div className="bottom-container">
                BOTTOM HEADER
            </div>
        </div>
    </div>
  )
}

export default Header