import React from 'react'
import './FeaturedImage.css'
import posterImage from "../../Images/cover.jpg"

const FeaturedImage = () => {
  return (
    <div className="poster-wrapper">
        <div className="big-poster">
            <img src={posterImage} alt="" className='main-image' />
            <div className="big-text-container">
                <h3 className='big-text'>TRANSFORM THE WAY YOU TRAIN</h3>
            </div>
        </div>
    </div>
  )
}

export default FeaturedImage