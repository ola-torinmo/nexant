import React from 'react'
import Frame10 from '../assets/Frame10.png'

 const Us = () => {
  return (
    <div className='w-full h-full bg-[#C4942D1A]'>
        <div  className='md:max-w-[1028px] max-w-[600px] m-auto w-full h-[500px] flex justify-between  items-center '>
          <div className='w-[500px]'>
              <p className='text-[#C4942D] text-[11px] pb-[20px]'>About us</p>
              <h1 className='text-3xl pb-[20px]'> Architects of Excellence, Pioneering Innovation in Construction.</h1>
              <p className='pb-[20px]'>Nexant has only been established for 10 years, but its top management has a combined wealth of knowledge and experience of over 40 years. Nexant Consulting LTD (NCL) experts have been advising clients on Infrastructure projects across the globe. Our primary specialist resources are a pool of exceptionally talented individuals - technical & management consultants that provide team oriented services on multi faceted projects as required. NCL harnesses the adept expertise and talent of a unique brand of engineers who possess the capacity to deliver a vast range of professional engineering services.</p>
              <button className="bg-[#C4942D] text-[#fff] px-6 py-2 rounded-md text-sm">Read more</button>
          </div>
          <div><img src={Frame10} className='w-[400px]' /></div>

        </div>

    </div>
  )
}

export default Us;