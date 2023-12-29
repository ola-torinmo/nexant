import React from 'react'
import '../App.css'
import Navbar from '../component/Navbar'
import Hero from '../component/Hero'
import Triumph from '../component/Triumph'
import Us from '../component/Us'
import Services from '../component/Services'
import Projects from '../component/Projects'
import Blogsection from '../component/Blogsection'
import Footer from '../component/Footer'

function Home() {
  return (
   <>
    <Navbar/>
    <Hero/>
    <Triumph/>
    <Us/>
    <Services/>
    <Projects/>
    <Blogsection/>
    <Footer/>
    
   </>
  )
}

export default Home