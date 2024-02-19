import React from 'react'
import Pro1 from '../assets/pro1.png';
import Pro2 from '../assets/pro2.png';
import Pro3 from '../assets/pro3.png';
import Pro4 from '../assets/pro4.png';
// import Elipse from '../assets/Ellipse.svg';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Project.css"

const Projects = () => {
  return (
    <div className="w-full h-full bg-white flex ">
        <div className='md:max-w-full text-center max-w-full mx-auto h-[600px] 2xl:pt-[20px] xl:pt-[10px]  md:pt-[50px] md:mt-[100px] mt-[50px] '>
          <div className='text-center md:pl-[150px] relative z-40  '>
              <p className='text-[#C4942D] text-center 2xl:text-[13px] ipad-pro:text-[13px] text-[11px] pb-[10px] md:ml-[-190px] 2xl:ml-[-140px] ipad-pro:ml-[-200px] '>Our projects</p>
              <h1 className='2xl:text-4xl ipad-pro:text-4xl md:text-3xl text-lg md:ml-[-100px] ml-[50px] md:w-[100%] text-center w-[300px] pb-[10px] 2xl:ml-[-70px] xl:ml-[%]'>Our Latest projects showcase</h1>
              <p className='2xl:text-[16px] ipad-pro:text-[16px] md:text-[16px] text-[11px] 2xl:w-[650px] md:w-[700px] w-[300px] md:ml-[30px] 2xl:ml-[65px]  md:mx-auto mx-auto pb-[px]  '>To deliver world class infrastructure and engineering consultancy services by reinforcing our worldwide corporate alliances and upholding top-tier quality and ethical standards'</p>
          </div>

         <div className='project-container'  >
            <div className="carousel-container">
              <Carousel className='project-carousels' autoPlay autoFocus interval={2000} infiniteLoop>
                  <div className="carousel-img">
                    <img src={Pro1} />
                  </div>
                  <div className="carousel-img">
                    <img src={Pro2} />
                  </div>
                  <div className="carousel-img">
                    <img src={Pro3}  />
                  </div>
                  <div className="carousel-img">
                    <img src={Pro4}  />
                  </div>
              </Carousel>
            </div>
          </div>  
        </div>

    </div>
  )
}

export default Projects