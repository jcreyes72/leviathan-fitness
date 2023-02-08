import React from 'react'
import './ShippingDeals.css'
import dailyDeals from "../../Images/shipping-deals.jpg"
import dailyDeals2 from "../../Images/shipping-deals-small.png"
import dailyDeals3 from "../../Images/shipping-deals-smallest.png"

const ShippingDeals = () => {
  return (
    <div className="section-wrapper-deals">
        <div className="tab-header">
            <h2 className='section-name'>DAILY SHIPPING DEALS</h2>
        </div>
        <div className="grey-line"></div>
        <div className="deals-container big">
            <img src={dailyDeals} alt="" className='daily-deals'/>
        </div>
        <div className="deals-container small">
            <img src={dailyDeals2} alt="" className='daily-deals'/>
        </div>
        <div className="deals-container smallest">
            <img src={dailyDeals3} alt="" className='daily-deals'/>
        </div>
    </div>
  )
}

export default ShippingDeals