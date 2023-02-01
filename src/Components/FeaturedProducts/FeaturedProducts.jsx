import React, { useState, useEffect } from 'react';
import "./FeaturedProducts.css"
import { Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {SliderProducts} from '../../Data/products.js'

const FeaturedProducts = () => {
  const [active, setActiveTab] = useState(0);

  // event handler for button clicks
  const handleClick = (e) => {
    setActiveTab(e.target.value)
  }

  // Filter the products based on the active category
  const filteredProducts = SliderProducts.filter(product => {
    if (active === 1) return product.category.includes("featured");
    if (active === 2) return product.category.includes("crossfit");
    if (active === 3) return product.category.includes("powerlifting");
    if (active === 4) return product.category.includes("olympic");
    if (active === 5) return product.category.includes("strongman");
    return true;
  });

  useEffect(() => {
    setActiveTab(1);
  }, []);
  
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
            spaceBetween={30}
            slidesPerGroup={4}
            loopFillGroupWithBlank={true}
            centerInsufficientSlides={true}
            speed={1500}
            loop={true}
            navigation={true}
            modules={[Navigation, Pagination]}
            className='my-swiper'
          >
              {filteredProducts.map((slide, i)=> (
                <SwiperSlide>
                  <div className="product-image">
                    <img src={slide.img} alt="product" className='img-p' />
                  </div>
                  <div className="left-s">
                    <div className="name">
                      <span> {slide.name} </span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

          </Swiper>
        </div>
    </div>
  )
}


export default FeaturedProducts