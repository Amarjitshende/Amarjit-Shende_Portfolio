import React from 'react'
import './Footer.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import user_icon from '../../assets/user_icon.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Footer = () => {
  return (
    <div className='footer'>
       <div className="footer-top">
        <div className="footer-top-left">
            <div className="footer-title">
            <h1>Amarjit</h1>
            <img src={theme_pattern} alt="" />
            </div>
            <p>Aspiring Web Developer | HTML, CSS, JavaScript, React.js | Passionate About Creating Responsive & User-Friendly Websites.</p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt="" />
                <input type="email" placeholder='Enter your email'/>
            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div>
       </div>
       <hr />
       <div className="footer-bottom">
          <p className='footer-bottom-left'>© 2024 Amarjit. All rights reserved.</p>
          <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <AnchorLink className='anchor-link' offset={50} href='#contact'><p>Connect with me</p></AnchorLink>
          </div>
       </div>
    </div>
  )
}

export default Footer