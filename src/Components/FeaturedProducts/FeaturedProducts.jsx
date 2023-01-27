import React from 'react'
import { useState } from 'react';
import "./FeaturedProducts.css"
import { Swiper, SwiperSlide, Navigation, Pagination } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


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


        <div className="s-container">
          <Swiper
            slidesPerView={4}
            spaceBetween={40}
            slidesPerGroup={1}
            loop={true}
          >
            <SwiperSlide>1</SwiperSlide>
            <SwiperSlide>2</SwiperSlide>
            <SwiperSlide>3</SwiperSlide>
            <SwiperSlide>4</SwiperSlide>
            <SwiperSlide>5</SwiperSlide>
            <SwiperSlide>6</SwiperSlide>
            <SwiperSlide>7</SwiperSlide>
            <SwiperSlide>8</SwiperSlide>
            <SwiperSlide>9</SwiperSlide>
            <SwiperSlide>10</SwiperSlide>
            <SwiperSlide>11</SwiperSlide>
            <SwiperSlide>12</SwiperSlide>

          </Swiper>
        </div>
    </div>
    
    
    



  )
}

export default FeaturedProducts