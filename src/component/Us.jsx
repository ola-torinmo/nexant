import React from 'react'
import Frame10 from '../assets/Frame10.png'
import { Link } from 'react-router-dom';

 const Us = () => {
  return (
    <div className='w-full h-full bg-[#C4942D1A]'>
        <div  className='2xl:max-w-[1536px] md:max-w-[1028px] md:m-auto pl-[10px] md:pl-[0px] ipad-pro:pl-[0px] 2xl:pl-[0px] w-full h-[900px] flex md:flex-row flex-col md:justify-between  items-center  md:pt-[0px] pt-[50px]'>
          <div className='md:w-[500px] w-[350px] md:pl-[0px] pl-[0px] '>
              <p className='text-[#C4942D] 2xl:text-xl text-[11px] pb-[20px]  w-[300px]  '>About us</p>
              <h1 className='2xl:text-5xl md:text-3xl text-sm pb-[20px] 2xl:w-[800px]   md:w-[600px] w-[300px] md:text-left text-center 2xl:leading-normal '> Architects of Excellence, Pioneering Innovation in Construction.</h1>
              <p className='2xl:w-[700px] md:w-[500px] w-[350px] pb-[20px] 2xl:text-2xl md:text-lg text-sm  '>Nexant has only been established for 10 years, but its top management has a combined wealth of knowledge and experience of over 40 years. Nexant Consulting LTD (NCL) experts have been advising clients on Infrastructure projects across the globe. Our primary specialist resources are a pool of exceptionally talented individuals - technical & management consultants that provide team oriented services on multi faceted projects as required. NCL harnesses the adept expertise and talent of a unique brand of engineers who possess the capacity to deliver a vast range of professional engineering services.</p>
              <Link to="/about">
              <button className="bg-[#C4942D] text-[#fff] px-6 py-2 rounded-md text-sm md:ml-[0px] ml-[0px] md:mt-[50px]">Read more</button>
              </Link>
          </div>
          
          <div><img src={Frame10} className='2xl:w-[600px] md:w-[400px] w-[300px] md:pt-[0px] pt-[50px]' /></div>
          

        </div>

    </div>
  )
}

export default Us;