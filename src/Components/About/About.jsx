import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/img.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>As a skilled Web Developer specializing in HTML, CSS, JavaScript, and React.js, I am passionate about building responsive and user-friendly websites. With hands-on experience in creating innovative web applications, I thrive in collaborative environments that value creativity and continuous learning.</p>
                    <p>I am dedicated to professional growth and am eager to tackle challenging projects that push the boundaries of web development. My goal is to contribute to impactful projects and enhance user experiences through cutting-edge technology.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"80%"}}/></div>
                    <div className="about-skill"><p>Javascript</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>Git & Github</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>Boostrap</p><hr style={{width:"70%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>2+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>10+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>2+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  )
}

export default About
