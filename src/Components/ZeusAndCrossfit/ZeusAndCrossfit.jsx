import React from 'react'
import "./ZeusAndCrossfit.css"
import zeus from "../../Images/zeus.png"
import crossfit from "../../Images/crossfit.png"

const ShoesAndGear = () => {
  return (
    <div className="zeus-crossfit-wrapper">
        <div className="product-images">
            <img src={zeus} alt="" className='zeus'/>
            <span className='product-title'>Zeus Gym Builder</span>
            <span className="shop-now">Start Building</span>
        </div>
        <div className="product-images">
            <img src={crossfit} alt="" className='crossfit'/>
            <span className='product-title'>CrossFit® Open Gear</span>
            <span className="shop-now">Shop Equipment</span>
        </div>
    </div>
  )
}

export default ShoesAndGear