import React from 'react'
import "./Footer.css"
import {BsFacebook as Facebook} from "react-icons/bs"
import {BsInstagram as Instagram} from "react-icons/bs"
import {BsTwitter as Twitter} from "react-icons/bs"
import {BsYoutube as YouTube} from "react-icons/bs"
import {BsCircleFill as IconFrame} from "react-icons/bs"



const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="main-container">
        <div className="link-column">
          <div className="column-section">About Us</div>
            <div className="footer-link-container">
              <a href="/" className="small-link">The Leviathan Way</a>
              <a href="/" className="small-link">Jobs</a>
              <a href="/" className="small-link">#yourleviathan</a>
            </div>
          <div className="column-section shopping">Shopping</div>
            <div className="footer-link-container">
              <a href="/" className="small-link">Retail Store</a>
              <a href="/" className="small-link">Gift Cards</a>
              <a href="/" className="small-link">Brands</a>
              <a href="/" className="small-link">Gift Registry</a>
            </div>
        </div>
        <div className="link-column">
          <div className="column-section">Customer Service</div>
          <div className="footer-link-container">
              <a href="/" className="small-link">Custom Quotes</a>
              <a href="/" className="small-link">Checkout FAQ</a>
              <a href="/" className="small-link">Track Your Order</a>
              <a href="/" className="small-link">Returns & Cancellations</a>
              <a href="/" className="small-link">Please Hire Me</a>
              <a href="/" className="small-link">Product Policies</a>
              <a href="/" className="small-link">Warranty Information</a>
              <a href="/" className="small-link">Suggestion Box</a>
              <a href="/" className="small-link">Report Website Issue</a>
              <a href="/" className="small-link">Customer Survey</a>
              <a href="/" className="small-link">Contact Us</a>
            </div>
        </div>
        <div className="link-column">
          <div className="column-section">Policies & Notices</div>
            <div className="footer-link-container">
                <a href="/" className="small-link">Recall Information</a>
                <a href="/" className="small-link">Privacy Policy</a>
                <a href="/" className="small-link">Terms of Use</a>
                <a href="/" className="small-link">Accessibility</a>
                <a href="/" className="small-link">Covid-19 Status</a>
            </div>
          <div className="column-section other-info">Other Info</div>
            <div className="footer-link-container">
                  <a href="/" className="small-link">Affiliates</a>
                  <a href="/" className="small-link">Leviathan Financing</a>
                  <a href="/" className="small-link">GSA Contract Info</a>
                  <a href="/" className="small-link">Distribution</a>
            </div>            
        </div>
        <div className="link-column">
          <div className="column-section">Other Websites</div>
            <div className="footer-link-container">
                    <a href="/" className="small-link">Leviathan International</a>
                    <a href="/" className="small-link">Leviathan Challenges</a>
                    <a href="/" className="small-link">Leviathan Athletes</a>
                    <a href="/" className="small-link">The Leviathan Blog</a>
                    <a href="/" className="small-link">The Leviathan Gym</a>
                    <a href="/" className="small-link">Leviathan Equipped Events</a>
                    <a href="/" className="small-link">Garage Gyms</a>
                    <a href="/" className="small-link">The Index</a>
                    <a href="/" className="small-link">ZEUS</a>
            </div>   
          <div className="column-section contact">Contact Us</div>
            <div className="footer-link-container">
                    <a href="/" className="small-link">(999)-999-9999</a>
                    <a href="/" className="small-link">Fax: (999)-999-9999</a>
            </div>   
            <div className="address">
              <span>Leviathan Fitness HQ</span>
              <span>555 E 3rd Ave.</span>
              <span>Myrtle Beach, SC, 29577</span>
            </div>
        </div>
        <div className="link-column actions">
          <div className="connect-container">
            Connect
            <div className="icon-container">
              <IconFrame className='icon-frame'/>
              <IconFrame className='icon-frame'/>
              <IconFrame className='icon-frame'/>
              <IconFrame className='icon-frame'/>
            </div>
          </div>
          <div className="connect-container app">
            <div className="icon-container">ICONS</div>
          </div>

        </div>
      </div>
      <div className="mark">
        <div className="leviathan-logo">logo</div>
        <div className="copyright">copyright</div>
      </div>
    </div>
  )
}

export default Footer