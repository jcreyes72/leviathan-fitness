import React from 'react'
import './PreFooter.css'
import { RiTruckFill as Truck } from "react-icons/ri";
import { GiGps as GPS } from "react-icons/gi";
import { AiFillGift as Gift } from "react-icons/ai";
import { BsFillCheckCircleFill as Contact } from "react-icons/bs";

const PreFooter = () => {
  return (
    <div className="footer-wrapper">
        <div className="footer-box">
            <div className="icon-wrapper"><Truck className='icon'/></div>
            <span className="text-box">DAILY SHIPPING DEALS</span>
            <span className="text-box">Save time and money with our daily shipping deals</span>
            <span className="text-box"></span>
        </div>
        <div className="footer-box">
            <div className="icon-wrapper"><GPS className='icon'/></div>
            <span className="text-box">TRACK YOUR ORDER</span>
            <span className="text-box">Follow the process of your order from our warehouse to the time it hits your door</span>
            <span className="text-box"></span>
        </div>
        <div className="footer-box">
            <div className="icon-wrapper"><Gift className='icon'/></div>
            <span className="text-box">LEVIATHAN GIFT CARDS</span>
            <span className="text-box">Give them exactly what they want with a Leviathan Gift Card</span>
            <span className="text-box"></span>
        </div>
        <div className="footer-box">
            <div className="icon-wrapper"><Contact className='icon'/></div>
            <span className="text-box">CONTACT US</span>
            <span className="text-box">How can we help?</span>
            <span className="text-box"></span>
        </div>
    </div>
  )
}

export default PreFooter