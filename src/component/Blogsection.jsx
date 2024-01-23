import React from 'react'
import blog1 from '../assets/blog1.png'
import blog2 from '../assets/blog2.png'

const Blogsection = () => {
  return (
   
    <div className="w-full h-full bg-[#C4942D] mb-[200px]  ">
        <div className='md:max-w-[1028px] max-w-[600px] md:h-[600px] h-[700px]  md:mt-[150px] md:pt-[50px] pt-[30px] '>
            <div className='text-center md:pl-[150px]   '>
                <p className='text-white text-[11px] pb-[10px] md:ml-[150px] '>Our Blog</p>
                <h1 className='md:text-3xl text-lg md:ml-[150px] ml-[20px] md:w-[700px] w-[350px] pb-[60px] text-white'>Unleashing Innovative Insights in Construction</h1>
                
            </div>
            <div className=' flex md:flex-row flex-col '>
              <img src={blog1} className='w-[608px] md:mb-[0px] mb-[20px]' />
              <img src={blog2} className='w-[608px]' />

            </div>

        </div>
        
        
    </div>
  )
}
export default Blogsection
