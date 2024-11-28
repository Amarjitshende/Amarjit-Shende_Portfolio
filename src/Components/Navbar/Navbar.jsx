import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'
// import logo from '../../assets/logo.gif'
import theme_pattern from '../../assets/theme_pattern.svg'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

export const Navbar = () => {
  const [menu,setMenu] = useState("home");
  const menuRef = useRef();
  

  const sections = ['home', 'about', 'services', 'projects', 'contact'];

  const openMenu = () => {
    menuRef.current.style.right="0";
  }

  const closeMenu = () => {
    menuRef.current.style.right="-350px";
  }

 
  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    sections.forEach(section => {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        const sectionTop = sectionElement.offsetTop;
        const sectionHeight = sectionElement.offsetHeight;

      
        if (scrollPosition >= sectionTop - 100 && scrollPosition < sectionTop + sectionHeight) {
          setMenu(section);
        }
      }
    });
  };


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return (
    <div className='navbar'>
      <div className="nav-title">
            <h1>Amarjit</h1>
            <img src={theme_pattern} alt="" />
        </div>
      {/* <img id='nav_logo' src={logo} alt="" /> */}
      <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open"/>
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
        {/* <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={underline}/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu==="about"?<img src={underline}/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu==="services"?<img src={underline}/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("work")}>Portfolio</p></AnchorLink>{menu==="work"?<img src={underline}/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<img src={underline}/>:<></>}</li> */}
        {sections.map(section => (
          <li key={section}>
            <AnchorLink className='anchor-link'  offset={80} href={`#${section}`} onClick={() => setMenu(section)}>
              <p>{section.charAt(0).toUpperCase() + section.slice(1)}</p>
            </AnchorLink>
            {menu === section ? <img src={underline} alt="underline" /> : <></>}
          </li>
        ))}
      </ul>
      <div className="nav-connect"><AnchorLink className='anchor-link' offset={80} href='#contact'>Connect With Me</AnchorLink></div>
    </div>
  )
}

export default Navbar