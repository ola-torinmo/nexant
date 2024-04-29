import React from 'react'
// import './About.css'
import Navbar from '../component/Navbar'
// import Hero from '../component/Hero'
// import Triumph from '../component/Triumph'
// import Us from '../component/Us'
// import Services from '../component/Services'
// import Projects from '../component/Projects'
// import Blogsection from '../component/Blogsection'
import Footer from '../component/Footer'
import Jumbotron from '../component/Jumbotron'
import jumbo1 from '../assets/newjumbo.png'
import Bar from '../component/Bar'
import Info from '../component/Info'
import Pillars from '../component/Pillars'
import usa from '../assets/usa.png'
import usb from '../assets/usb.png'
import usc from '../assets/usc.png'
import Us2 from '../component/Us2'
import Us3 from '../component/Us3'
import '../App.css'

function About() {
  return (
    <>
    <Navbar/>
    <Jumbotron img={jumbo1}
    title="About Us"
    body="Extensive expertise and experience in Engineering works..." />
    <Us2 img={usa} 
    body="Nexant has only been established for 10 years, but its top management has a combined wealth of knowledge and experience of over 40 years. Nexant Consulting LTD (NCL) experts have been advising clients on Infrastructure projects across the globe. Our primary specialist resources are a pool of exceptionally talented individuals - technical & management consultants that provide team oriented services on multi faceted projects as required. NCL harnesses the adept expertise and talent of a unique brand of engineers who possess the capacity to deliver a vast range of professional engineering services." 
    title=" Architects of Excellence, Pioneering Innovation in Construction."
    desc="About us"/>
    <Bar/>
    <Info/>
    <Pillars/>
    <Us2 img={usb}
    body="Nexant has only been established for 10 years, but its top management has a combined wealth of knowledge and experience of over 40 years. Nexant Consulting LTD (NCL) experts have been advising clients on Infrastructure projects across the globe. Our primary specialist resources are a pool of exceptionally talented individuals - technical & management consultants that provide team oriented services on multi faceted projects as required. NCL harnesses the adept expertise and talent of a unique brand of engineers who possess the capacity to deliver a vast range of professional engineering services."
    title="Who we are "/>
    <Us3 img={usc}
    body="NCL's engineers and consultants have assisted a wide range of clients on a myriad of projects throughout the world. From feasibility studies, conceptual design, front end engineering design, detailed engineering design, project management and construction management and litigation consulting. We have successfully provided proactive and cost effective project support for decades in a range of professional areas to"
    title="What we offer" />
    
    <Footer/>
    
   </>
  )
}

export default About