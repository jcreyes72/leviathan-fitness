import React from 'react'
import { useState } from 'react';
import "./FeaturedProducts.css"

const FeaturedProducts = () => {

  const [active, setActiveTab] = useState(0);

  // event handler for button clicks
  const handleClick = (e) => {
    setActiveTab(e.target.value)
  }

  return (
    <div className="section-wrapper">
        <div className="tab-header">
            <h2 className='section-name'>FEATURED PRODUCTS</h2>
            <div className="fill"></div>
            <div className="tabs-select">
              <div className="buttons">
                <button className={active === 1 ? 'active' : ''} onClick={() => setActiveTab(1)}>Featured</button>
                <button className={active === 2 ? 'active' : ''} onClick={() => setActiveTab(2)}>Crossfit</button>
                <button className={active === 3 ? 'active' : ''} onClick={() => setActiveTab(3)}>Powerlifting</button>
                <button className={active === 4 ? 'active' : ''} onClick={() => setActiveTab(4)}>Olympic</button>
                <button className={active === 5 ? 'active' : ''} onClick={() => setActiveTab(5)}>Strongman</button>
              </div>
            </div>
        </div>
        <div className="grey-line"></div>
    </div>
    
  )
}

export default FeaturedProducts