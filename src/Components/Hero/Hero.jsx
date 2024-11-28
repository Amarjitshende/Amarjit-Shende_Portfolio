import React from 'react'
import './Hero.css'
import profile_img from '../../assets/imground.png'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img className='imgprofile' src={profile_img} alt="" />
        <h1><span>I'm Amarjit Shende</span> frontend developer.</h1>
        <p>Aspiring Web Developer | HTML, CSS, JavaScript, React.js | Passionate About Creating Responsive & User-Friendly Websites</p>
        <div className="hero-action">
            <a className="hero-connect" href='https://www.linkedin.com/in/amarjit-shende-39b89b274/' offset={50}>Connect me on LinkedIn</a>
            <a href='https://drive.google.com/file/d/18XkIoqdlZzINeOpKZp5spad3tT3E7tKl/view?usp=drivesdk' className="hero-resume">My Resume</a>
        </div>
    </div>
  )
}

export default Hero