import React from 'react';

import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/Experience/Experience'
// import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Topbar from './components/topbar/Topbar';


export const App = () => {
  return (
    <>
    <Topbar/>
    <Header />
    <Nav/>
    <About/>
    <Experience/>
    {/* <Services/> */}
    <Portfolio/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </>
    
  )
}
export default App