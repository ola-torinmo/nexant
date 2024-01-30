import React from 'react'
import media from '../assets/media.png'


export default function Media  ()  {
  return (
    <div className='md:mt-[-250px] mt-[-550px]'>
        <p className='font-medium m-auto md:ml-[100px] ml-[30px] md:mt-[0px] mt-[20px] text-xl'>Media</p>
        <img src={media} className='w-screen md:mt-[00px] md:mt-[100px] mt-[20px] ' alt="" />
        
    </div>
  );
}