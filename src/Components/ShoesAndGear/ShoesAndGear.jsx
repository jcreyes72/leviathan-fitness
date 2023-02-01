import React from 'react'
import "./ShoesAndGear.css"
import shoes from "../../Images/shoes.jpg"
import garagegear from "../../Images/garagegear.jpg"

const ShoesAndGear = () => {
  return (
    <div className="shoes-gear-wrapper">
        <div className="product-images">
            <img src={shoes} alt="" className='shoes'/>
            <span className='product-title'>Shoes for every workout</span>
            <span className="shop-now">Shop Now</span>
        </div>
        <div className="product-images">
            <img src={garagegear} alt="" className='gear'/>
            <span className='product-title'>Garage Gym Gear</span>
            <span className="shop-now">Shop Now</span>
        </div>
    </div>
  )
}

export default ShoesAndGear