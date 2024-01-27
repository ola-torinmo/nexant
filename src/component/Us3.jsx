import React from 'react'
// import Frame10 from '../assets/Frame10.png'

 const Us3 = (props) => {
  return (
    <div className='w-full h-full bg-[#C4942D1A]'>
        <div  className='md:max-w-[1028px] max-w-[600px] m-auto w-full h-[900px] flex md:flex-row flex-col md:justify-between  items-center  md:pt-[-100px] pt-[50px]'>
          <div><img src={props.img} className='md:w-[400px] w-[300px] pt-[50px]' /></div>
          <div className='md:w-[500px] w-[600px] '>
              <p className='text-[#C4942D] text-[11px] pb-[20px] md:pl-[0px] pl-[150px]'>{props.desc}</p>
              <h1 className=' md:text-3xl text-sm pb-[20px] md:pl-[0px] pl-[120px] md:w-[600px] w-[400px] md:text-left text-center text-[#C4942D] '>{props.title}</h1>
              <p className='md:w-[400px] w-[450px] pb-[20px] md:text-lg text-sm md:pl-[0px] pl-[150px]'>{props.body}</p>
              
          </div>
          

        </div>

    </div>
  )
}

export default Us3;