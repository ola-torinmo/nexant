import React from 'react'
import Pro1 from '../assets/pro1.png';
import Pro2 from '../assets/pro2.png';
import Pro3 from '../assets/pro3.png';
import Pro4 from '../assets/pro4.png';
import Elipse from '../assets/Ellipse.svg';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Project.css"

const Projects = () => {
  return (
    <div className="w-full h-full bg-white flex ">
        <div className='md:max-w-full text-center max-w-full mx-auto h-[600px] 2xl:pt-[20px] xl:pt-[10px]  md:pt-[50px] md:mt-[100px] mt-[50px] '>
          <div className='text-center md:pl-[150px] relative z-40  '>
              <p className='text-[#C4942D] text-center 2xl:text-[13px] xl:text-[13px] text-[11px] pb-[10px] md:ml-[0px] 2xl:ml-[85%] xl:ml-[0%] '>Our projects</p>
              <h1 className='2xl:text-4xl xl:text-4xl md:text-3xl text-[lg] md:ml-[00px] ml-[50px] md:w-[100%] text-center w-[300px] pb-[10px] 2xl:ml-[0%] xl:ml-[%]'>Our Latest projects showcase</h1>
              <p className='2xl:text-[16px] xl:text-[16px] md:text-[13px] text-[11px] 2xl:w-[900px] md:w-[700px] w-[300px] 2xl:mx-auto xl:mx-auto md:mx-auto mx-auto pb-[px]  '>To deliver world class infrastructure and engineering consultancy services by reinforcing our worldwide corporate alliances and upholding top-tier quality and ethical standards'</p>
          </div>

         <div className='project-container'  >
            <div className="carousel-container">
              <Carousel className='project-carousels' autoPlay autoFocus interval={2000} infiniteLoop>
                  <div className="carousel-img">
                    <img src="/Frame 24.png" />
                  </div>
                  <div className="carousel-img">
                    <img src="/Frame 25.png" />
                  </div>
                  <div className="carousel-img">
                    <img src="/Frame 26.png"  />
                  </div>
                  <div className="carousel-img">
                    <img src="/Frame 27.png"  />
                  </div>
              </Carousel>
            </div>
          </div>  
        </div>

    </div>
  )
}

export default Projects