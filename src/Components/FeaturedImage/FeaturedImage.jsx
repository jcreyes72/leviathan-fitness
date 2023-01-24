import React from 'react'
import './FeaturedImage.css'
import posterImage from "../../Images/cover.jpg"

const FeaturedImage = () => {
  return (
    <div className="poster-wrapper">
        <div className="big-poster">
            <img src={posterImage} alt="" className='main-image' />
        </div>
    </div>
  )
}

export default FeaturedImage