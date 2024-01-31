import React from 'react'
import blog1 from '../assets/blog1.png'
import blog2 from '../assets/blog2.png'

const Blogsection = (props) => {
  return (
   
    <div className="w-full h-full bg-[#C4942D] mb-[200px]  ">
        <div className='md:w-[1028px] max-w-[600px] md:h-[600px] h-[700px]  md:mt-[150px] md:pt-[50px] pt-[30px] '>
            <div className=' md:pl-[0px]   '>
                <p className='text-white text-[11px] pb-[10px] w-[200px]  md:ml-[580px] ml-[180px] '>{props.title}</p>
                <h1 className='md:text-3xl text-lg md:ml-[270px] ml-[30px] md:w-[700px] w-[350px] pb-[60px] text-white text-center '>{props.body}</h1>
                
            </div>
            <div className=' flex md:flex-row flex-col md:ml-[%] '>
              <img src={blog1} className='w-[600px] md:ml-[5%] md:pl-[0px] md:mb-[0px] mb-[20px]' />
              <img src={blog2} className='w-[600px]' />

            </div>

        </div>
        
        
    </div>
  )
}
export default Blogsection
