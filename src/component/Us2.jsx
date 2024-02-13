import React from 'react'
// import Frame10 from '../assets/Frame10.png'

 const Us2 = (props) => {
  return (
    <div className='w-full h-full bg-[#C4942D1A]'>
        <div  className='md:max-w-[1028px] 2xl:max-w-[1536px]  m-auto w-full h-[900px] 2xl:h-[1300px] flex md:flex-row flex-col md:justify-between  items-center 2xl:pt-[00px]  md:pt-[100px] pt-[100px] '>
          <div className='md:w-[500px] w-[350px] md:pl-[0px] pl-[0px] '>
              {/* <p className='text-[#C4942D] text-[11px] pb-[20px] '>{props.desc}</p> */}
              <h1 className=' 2xl:text-5xl  md:text-3xl text-sm pb-[20px] 2xl:w-[800px]  md:w-[600px] w-[200px] text-left  text-[#C4942D] '>{props.title}</h1>
              <p className='md:w-[500px] 2xl:w-[700px] w-[300px] pb-[20px] 2xl:text-2xl   md:text-lg text-sm '>{props.body}</p>
              
          </div>
          <div><img src={props.img} className='2xl:w-[600px] md:w-[400px] w-[300px]  md:pt-[0px] pt-[50px]' /></div>

        </div>

    </div>
  )
}

export default Us2;