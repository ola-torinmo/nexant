import React from 'react'
import blog1 from '../assets/blog1.png'
import blog2 from '../assets/blog2.png'

const Blogsection = (props) => {
  return (
   
    <div className="w-full h-full bg-[#C4942D] mb-[200px] mt-[100px] md:mt-[0px] ipad-pro:mt-[0px] 2xl:mt-[0px] ">
        <div className='2xl:max-w-[1536px] md:w-[1028px] max-w-[600px] md:h-[600px] h-[700px] ipad-prov:h-[500px] ipad-v:h-[450px]  md:mt-[150px] md:pt-[50px] pt-[30px] 2xl:pt-[25px] '>
        <p className='text-white text-[11px] pb-[10px] md:w-[200px] ipad-pro:ml-[110%] md:ml-[103%] ml-[180px] ipad-prov:w-[300px] ipad-h:ml-[90%] ipad-prov:ml-[80%] ipad-v:ml-[65%]  2xl:hidden '>{props.title}</p>
            <div className=' 2xl:ml-[2%] ipad-prov:ml-[-12%] ipad-h:ml-[-10%] ipad-v:ml-[-35%] 2xl:mt-[30px]  '>
                
                <h1 className='md:text-3xl text-lg 2xl:ml-[600px] ipad-pro:ml-[350px] md:ml-[270px] ml-[50px] md:w-[700px] w-[300px] pb-[60px] 2xl:pb-[40px] text-white text-center '>{props.body}</h1>
                
            </div>
            <div className=' flex md:flex-row flex-col 2xl:ml-[16.5%] md:ml-[5%] ipad-h:ml-[8%]'>
              <img src={blog1} className='2xl:w-[1500px] w-[600px] ipad-prov:w-[450px] ipad-h:w-[500px] ipad-prov:ml-[7.5%] ipad-v:w-[375px]   ipad-pro:ml-[14%] xl:ml-[7%] md:mb-[0px] mb-[20px]' />
              <img src={blog2} className='2xl:w-[1500px] w-[600px] ipad-prov:w-[450px] ipad-h:w-[500px]  ipad-v:w-[375px] ' />

            </div>

        </div>
        
        
    </div>
  )
}
export default Blogsection
