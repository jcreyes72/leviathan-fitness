import React from 'react'
import './FeaturedImage.css'
import posterImage from "../../Images/cover.jpg"

const FeaturedImage = () => {
  return (
    <div className="poster-wrapper">
        <div className="big-poster">
            <img src={posterImage} alt="" className='main-image' />
            <div className="big-text-container">
                <h3 className='big-text'>TRANSFORM <br/> THE WAY <br/> YOU TRAIN</h3>
            </div>
            <div className="small-text-container">
                <h3 className='small-text'>
                   <span>YOUR <br/></span>
                </h3>
                <h3 className="small-text-red">
                   <span> NEW YEARS RESOLUTION <br/></span>
                </h3>
                <h3 className="small-text">
                    <span> WON'T KNOW WHAT HIT IT </span>
                </h3>
            </div>
            <div className="shop-now-container">
                <a href="/" className='shop-weightlifting'>SHOP WEIGHTLIFTING</a>
            </div>
        </div>
    </div>
  )
}

export default FeaturedImage