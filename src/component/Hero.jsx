import React from 'react'
import '../App.css'
import Frame9 from '../assets/Frame9.png';
import Frame8 from '../assets/Frame8.png';
import Frame7 from '../assets/Frame7.png';

 const Hero = () => {
  return (
   <div className='w-full h-full bg-[#C4942D1A]'>
        <div className='md:max-w-[1028px] max-w-[600px] m-auto pt-[80px] '>
            <div className='pt-[10px] '>
                <h1 className='w-[600px] text-4xl pb-[20px] '>Engineering <span className='text-[#C4942D]'>Excellence</span> And Guiding <span className='text-[#FDD575]'>Projects</span> To <span className='text-[#C4942D]'>Perfection</span></h1>
                <p className='w-[500px] text-base pb-[20px]'>As an Indigenous ISO Certified Consultancy Firm specializing in Engineering Design & Construction Supervision, we are your partners from project inception to flawless completion. </p>

                <button className="bg-[#C4942D] text-[#fff] px-7 py-2 mr-3 rounded-md text-sm">Explore our services </button>
                <button className=" text-[#C4942D] px-12 py-1 outline outline-offset-2 outline-[#C4942D] rounded-md text-sm">Contact us</button>
            </div>
            
            <div className='flex flex-row  space-x-9 -mt-[240px] '>
                <img className="md:w-[400px] h-[300px] mt-[400px]" src={Frame9}/>
                <img className="md:w-[300px] h-[500px] mt-[200px]" src={Frame8}/>
                <img className="md:w-[300px] h-[700px]" src={Frame7}/>
            </div>
        </div>

    
   </div>
  )
}

export default Hero;