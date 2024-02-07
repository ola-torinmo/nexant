import React from 'react'
import '../App.css'
import Frame9 from '../assets/Frame9.png';
import Frame8 from '../assets/Frame8.png';
import Frame7 from '../assets/Frame7.png';
import { Link } from 'react-router-dom';

 const Hero = () => {
  return (
   <div className='w-full h-full bg-[#C4942D1A]'>
        <div className='md:max-w-[1028px] max-w-[600px] md:m-auto md:pt-[80px] pt-[20px] md:px-0 px-[10px] '>
            <div className='pt-[10px]  '>
                <h1 className='md:w-[600px] w-[350px] md:text-4xl text-xl text-left pb-[20px] '>Engineering <span className='text-[#C4942D]'>Excellence</span> And Guiding <span className='text-[#FDD575]'>Projects</span> To <span className='text-[#C4942D]'>Perfection</span></h1>
                <p className='md:w-[500px] w-[300px] text-sm pb-[20px] leading-[20px] '>As an Indigenous ISO Certified Consultancy Firm specializing in Engineering Design & Construction Supervision, we are your partners from project inception to flawless completion. </p>

                <Link to="/service">
                <button className="bg-[#C4942D] text-[#fff] md:px-7 px-4 py-2 mr-3 rounded-md md:text-sm text-xs">Explore our services</button>
                </Link>
                <Link to="/contact">
                <button className="text-[#C4942D] md:px-12 px-6 py-1 outline outline-offset-2 outline-2 outline-[#C4942D] rounded-md md:text-sm text-xs">Contact us</button>
                </Link>
            </div>
            
            <div className='flex flex-row  md:space-x-9 space-x-2 md:-mt-[240px] -mt-[270px] '>
                <img className="md:w-[400px] w-[120px] md:h-[300px] h-[200px] md:mt-[400px] mt-[350px]" src={Frame9}/>
                <img className="md:w-[300px] w-[130px] md:h-[500px] h-[300px] md:mt-[200px] mt-[300px]" src={Frame8}/>
                <img className="md:w-[300px] w-[120px] md:h-[700px] h-[200px] md:mt-[0px] mt-[350px]" src={Frame7}/>
            </div>
        </div>

    
   </div>
  )
}

export default Hero;