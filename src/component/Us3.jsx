import React from 'react'
// import Frame10 from '../assets/Frame10.png'

 const Us3 = (props) => {
  return (
    <div className='w-full h-full bg-[#C4942D1A]'>
        <div  className='2xl:max-w-[1536px] md:max-w-[1028px] md:m-auto pl-[10px] md:pl-[0px] ipad-pro:pl-[0px] 2xl:pl-[0px] w-full h-[900px] flex md:flex-row flex-col md:justify-between  items-center  md:pt-[-100px] pt-[0px] ipad-prov:px-[5%] ipad-v:px-[3%] ipad-v:h-[700px] 2xl:-space-x-[250px] '>
          <div><img src={props.img} className='2xl:w-[600px] md:w-[400px] w-[300px] pt-[50px] ' /></div>
          <div className='md:w-[500px] w-[350px] md:order-last order-first ipad-v:pl-[10%] 2xl:-space-x-[200px]'>
              {/* <p className='text-[#C4942D] text-[11px] pb-[20px] '>{props.desc}</p> */}
              <h1 className='2xl:text-5xl  md:text-3xl text-sm pb-[20px] ipad-v:text-3xl ipad-prov:w-[200px] ipad-h:w-[200px]  md:w-[600px] ipad-v:w-[200px] w-[200px] text-left text-[#C4942D] '>{props.title}</h1>
              <p className='md:w-[500px] 2xl:w-[700px] w-[300px] pb-[20px] 2xl:text-2xl md:text-lg text-sm ipad-v:text-base ipad-v:w-[400px]'>{props.body}</p>
              
          </div>
          

        </div>

    </div>
  )
}

export default Us3;