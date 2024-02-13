import React from 'react'
import blog1 from '../assets/blog1.png'
import blog2 from '../assets/blog2.png'

const Blogsection = (props) => {
  return (
   
    <div className="w-full h-full bg-[#C4942D] mb-[200px]  ">
        <div className='2xl:max-w-[1536px] md:w-[1028px] max-w-[600px] md:h-[600px] h-[700px]  md:mt-[150px] md:pt-[50px] pt-[30px] 2xl:pt-[25px] '>
            <div className=' md:pl-[0px]   '>
                <p className='text-white text-[11px] pb-[10px] md:w-[200px] xl:ml-[110%] 2xl:ml-[90%]  md:ml-[90%] ml-[180px] '>{props.title}</p>
                <h1 className='md:text-3xl text-lg 2xl:ml-[600px] xl:ml-[350px] md:ml-[270px] ml-[50px] md:w-[700px] w-[300px] pb-[60px] 2xl:pb-[40px] text-white text-center '>{props.body}</h1>
                
            </div>
            <div className=' flex md:flex-row flex-col md:w-[] '>
              <img src={blog1} className='2xl:w-[1500px] w-[600px] md:ml-[5%] 2xl:ml-[25%] xl:ml-[14%] md:pl-[0px] md:mb-[0px] mb-[20px]' />
              <img src={blog2} className='2xl:w-[1500px] w-[600px] ' />

            </div>

        </div>
        
        
    </div>
  )
}
export default Blogsection
