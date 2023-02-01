import React from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import barbells from '../../Images/barbells.png'
import apparel from '../../Images/apparel.png'
import benches from '../../Images/benches.png'
import irongame from '../../Images/irongame.png'
import wraps from '../../Images/wraps.png'
import mobility from '../../Images/mobility.png'
import plates from '../../Images/plates.png'
import "./PopularCategory.css"

const PopularCategory = () => {
  
  return (
    <div className="section-wrapper">
        <div className="tab-header">
            <h2 className='section-name'>POPULAR CATEGORIES</h2>
            <div className="fill"></div>
        </div>
        <div className="grey-line"></div>


        <div className="s-container">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            slidesPerGroup={4}
            centerInsufficientSlides={true}
            speed={1500}
            loop={true}
            navigation={true}
            modules={[Navigation, Pagination]}
            className='my-swiper'
          >

            <SwiperSlide>
                <div className="product-image popular-categories">
                <img src={barbells} alt="product" className='img-p' />
                </div>
                <div className="left-s">
                    <div className="name">
                        <span className='popular'> Barbells </span><br />
                        <div className="separate"></div>
                        <a href="#" className='sub-link'>Multipurpose</a> <span> | </span>
                        <a href="#" className='sub-link'>Olympic</a> <span> | </span>
                        <a href="#" className='sub-link'>Powerlifting</a>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="product-image popular-categories">
                <img src={plates} alt="product" className='img-p' />
                </div>
                <div className="left-s">
                    <div className="name">
                        <span className='popular'> Plates </span>
                        <div className="separate"></div>
                        <a href="#" className='sub-link'>Bumper</a> <span> | </span>
                        <a href="#" className='sub-link'>Competition</a> <span> | </span>
                        <a href="#" className='sub-link'>Steel</a>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="product-image popular-categories">
                <img src={benches} alt="product" className='img-p' />
                </div>
                <div className="left-s">
                    <div className="name">
                        <span className='popular'> Benches </span>
                        <div className="separate"></div>
                        <a href="#" className='sub-link'>Flat</a> <span> | </span>
                        <a href="#" className='sub-link'>Adustable</a> 
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="product-image popular-categories">
                <img src={irongame} alt="product" className='img-p' />
                </div>
                <div className="left-s">
                    <div className="name">
                        <span className='popular'> Iron Game Programming </span>
                        <div className="separate"></div>
                        <a href="#" className='sub-link'>PRVN Fitness</a> <span> | </span>
                        <a href="#" className='sub-link'>Mayhem Athlete</a>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="product-image popular-categories">
                <img src={apparel} alt="product" className='img-p' />
                </div>
                <div className="left-s">
                    <div className="name">
                        <span className='popular'> Apparel </span>
                        <div className="separate"></div>
                        <a href="#" className='sub-link'>Men's</a> <span> | </span>
                        <a href="#" className='sub-link'>Women's</a>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="product-image popular-categories">
                <img src={wraps} alt="product" className='img-p' />
                </div>
                <div className="left-s">
                    <div className="name">
                        <span className='popular'> Wraps, Straps, & Supports </span>
                        <div className="separate"></div>
                        <a href="#" className='sub-link'>Straps</a> <span> | </span>
                        <a href="#" className='sub-link'>Knee Sleeves</a> <span> | </span>
                        <a href="#" className='sub-link'>Belts</a>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="product-image popular-categories">
                <img src={mobility} alt="product" className='img-p' />
                </div>
                <div className="left-s">
                    <div className="name">
                        <span className='popular'> Mobility </span>
                        <div className="separate"></div>
                        <a href="#" className='sub-link'>Tools</a> <span> | </span>
                        <a href="#" className='sub-link'>Accessories</a>
                    </div>
                </div>
            </SwiperSlide>

          </Swiper>
        </div>
    </div>
  )
}


export default PopularCategory