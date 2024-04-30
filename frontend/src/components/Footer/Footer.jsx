import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo}></img>
            <p>Choose from a diverse menu feauturing a delectable array of dishes crafted with the finest ingredients and culinery expertise. Our mission is to satisfy your cravings and elevate your dining expereience, one delicious meal at at time.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt=''></img>
                <img src={assets.twitter_icon} alt=''></img>
                <img src={assets.linkedin_icon} alt=''></img>
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91-987-654-320</li>
                <li>contact@tomato.com</li>
            </ul>
        </div>
      </div>
      <hr></hr>
      <p className='footer-copyright'>
        Copyright 2024 © Tomato.com - All Rights Reserved.
      </p>
    </div>
  )
}

export default Footer
