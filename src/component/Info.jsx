import React from 'react'
import info1 from '../assets/info1.png'
import info2 from '../assets/info2.png'

export default function Info  ()  {
  return (
    <div className='ipad-prov:px-[5%]'>
        <img src={info1} className='w-full md:mt-[00px] mt-[100px] hidden lg:block' alt="" />
        <img src={info2} className='w-full md:mt-[00px] mt-[-100px] md:hidden' alt="" />
    </div>
  );
}
