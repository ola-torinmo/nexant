import React from 'react'
import blog1 from '../assets/blog1.png'
import blog2 from '../assets/blog2.png'

const Blogsection = () => {
  return (
   
    <div className="w-full h-full bg-[#C4942D] mb-[200px]  ">
        <div className='md:max-w-[1028px] max-w-[600px] h-[600px]  mt-[150px] pt-[50px] '>
            <div className='text-center pl-[150px]   '>
                <p className='text-white text-[11px] pb-[10px] ml-[150px] '>Our Blog</p>
                <h1 className='text-3xl   ml-[150px] w-[700px] pb-[60px] text-white'>Unleashing Innovative Insights in Construction</h1>
                
            </div>
            <div className=' flex  '>
            <img src={blog1} className='w-[633.5px]' />
            <img src={blog2} className='w-[633.5px]' />

        </div>

        </div>
        
        
    </div>
  )
}
export default Blogsection
