import React from 'react'
// import media from '../assets/media.png'


export default function Media  (props)  {
  return (
    <div className='md:mt-[-250px] mt-[-550px] px-12'>
        <p className='font-medium m-auto 2xl:ml-[10%] xl:ml-[12%] md:ml-[100px] ml-[30px] md:mt-[0px] mt-[90px] text-xl'>Media</p>
        <img src={props.media} className='w-screen 2xl:mt-[10px] xl:mt-[10px] md:mt-[100px] mt-[0px] ' alt="" />
        
    </div>
  );
}
