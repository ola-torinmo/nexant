import React from 'react'
import jumbo2 from '../assets/jumbo2.png'
import Navbar from '../component/Navbar';
import Jumbotron from '../component/Jumbotron'
import Footer from '../component/Footer';
import Headline from '../component/Headline';
import Services2 from '../component/Services2';

function Services  ()  {
  return (
   <>
   <Navbar/>
   <Jumbotron img={jumbo2}
   title="Our Services"
   body="Explore our construction blog for insights, trends, and expert perspectives..."/>
   <Headline/>
   <Services2/>

   <Footer/>
   
    
   </>
  )
}

export default Services;