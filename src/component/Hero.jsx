import React from 'react'
import '../App.css'
import Frame9 from '../assets/Frame9.png';
import Frame8 from '../assets/Frame8.png';
import Frame7 from '../assets/Frame7.png';
import { Link } from 'react-router-dom';

 const Hero = () => {
  return (
   <div className='w-full h-full bg-[#C4942D1A]'>
        <div className='md:max-w-[1028px] max-w-[600px] 2xl:max-w-[1536px] md:m-auto md:pt-[80px] pt-[20px] md:px-0 px-[20px] '>
            <div className='pt-[10px]  '>
                <h1 className='2xl:w-[800px] md:w-[600px] w-[350px] 2xl:text-5xl md:text-4xl text-xl text-left pb-[20px] '>Engineering <span className='text-[#C4942D] 2xl:leading-[70px] leading-[35px]'>Excellence</span> And Guiding <span className='text-[#FDD575] 2xl:leading-[70px] leading-[35px]'>Projects</span> To <span className='text-[#C4942D] 2xl:leading-[70px] leading-[35px]'>Perfection</span></h1>
                <p className='2xl:w-[800px] md:w-[500px] w-[300px] 2xl:text-lg text-sm pb-[20px] leading-[20px] '>As an Indigenous ISO Certified Consultancy Firm specializing in Engineering Design & Construction Supervision, we are your partners from project inception to flawless completion. </p>

                <Link to="/service">
                <button className="bg-[#C4942D] text-[#fff] 2xl:px-9 2xl:py-3 md:px-7 px-4 py-2 mr-3 rounded-md 2xl:text-lg md:text-sm text-xs">Explore our services</button>
                </Link>
                <Link to="/contact">
                <button className="text-[#C4942D] 2xl:px-12 2xl:py-2 md:px-12 px-6 py-1 outline outline-offset-2 outline-2 outline-[#C4942D] xl:rounded-md rounded-md 2xl:text-lg md:text-sm text-xs">Contact us</button>
                </Link>
            </div>
            
            <div className='flex flex-row 2xl:space-x-12  md:space-x-9 space-x-2 md:-mt-[240px] -mt-[270px] '>
                <img className=" 2xl:w-[600px] md:w-[400px] w-[120px] 2xl:h-[500px] md:h-[300px] h-[200px] md:mt-[400px] mt-[350px]" src={Frame9}/>
                <img className=" 2xl:w-[600px] md:w-[300px] w-[130px] 2xl:h-[700px] md:h-[500px] h-[300px] md:mt-[200px] mt-[300px]" src={Frame8}/>
                <img className=" 2xl:w-[600px] md:w-[300px] w-[120px] 2xl:h-[900px] md:h-[700px] h-[200px] md:mt-[0px] mt-[350px]" src={Frame7}/>
            </div>
        </div>

    
   </div>
  )
}

export default Hero;