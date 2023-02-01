import React from 'react'
import './ShippingDeals.css'
import dailyDeals from "../../Images/shipping-deals.jpg"

const ShippingDeals = () => {
  return (
    <div className="section-wrapper-deals">
        <div className="tab-header">
            <h2 className='section-name'>DAILY SHIPPING DEALS</h2>
        </div>
        <div className="grey-line"></div>
        <div className="deals-container">
            <img src={dailyDeals} alt="" className='daily-deals'/>
        </div>
    </div>
  )
}

export default ShippingDeals