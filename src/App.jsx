import React from 'react'
import { Navbar } from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import MyWork from './Components/MyWork/MyWork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import ScrollToTopButton from './Components/scrollButton/ScrollToTopButton'


export const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <MyWork/>
      <Contact/>
      <Footer/>
      <ScrollToTopButton />
    </>
  )
}


export default App

