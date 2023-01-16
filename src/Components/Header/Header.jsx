import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className="header">
        <div className="header top">
            <div className="top-container">
                <div className="top-logo">
                    <h5>LEVIATHAN</h5>
                </div>
            </div>
        </div>
        <div className="header middle">
            <div className="middle-container">
                MIDDLE HEADER
            </div>
        </div>
        <div className="header bottom">
            <div className="bottom-container">
                BOTTOM HEADER
            </div>
        </div>
    </div>
  )
}

export default Header