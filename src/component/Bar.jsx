import React from 'react';
import group8 from '../assets/group8.png'
import Frame1 from '../assets/frame1.png'
import Frame2 from '../assets/frame2.png'
import Frame3 from '../assets/frame3.png'
import Frame4 from '../assets/frame4.png'

export default function Bar() {

  
  return (
    <div className='w-full'>
        
        <img src={group8} 
        className ='w-full md:h-[200px] h-[260px] '
        
        
        />
            
        <div className='flex md:pl-[15%] pl-[14%] md:mt-[-150px] mt-[-250px] md:pb-[0px] pb-[80px] my-[5%]'>
                <div className='flex md:flex-row flex-col md:mt-0 mt-'>
                    <div className='text-white flex items-center'>
                        <img src={Frame1} className='md:w-[60px] w-[40px] md:h-[60px] h-[40px]' />
                        <div className='ml-4 md:ml- mt-4 '>
                            <h1 className='md:text-4xl text-lg '>
                            10 Years+
                            </h1>
                            <p className='md:w-[180px] text-[11px] text-[9px] pb-4'>
                            In Business
                            </p>
                        </div>
                    </div>
                    <div className='text-white flex items-center mt- '>
                        <img src={Frame2} className='md:w-[60px] w-[40px] md:h-[60px] h-[40px] -mt-2 md:mt-0' />
                        <div className='ml-4 ml- md:mt-5 mt-3'>
                            <h1 className='md:text-4xl text-xl '>
                            30+
                            </h1>
                            <p className='md:w-[180px] text-[11px] text-[9px] pb-6'>
                            Projects Completed
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flex md:flex-row flex-col ml-6 md:-ml-10 mt- '>
                    <div className='text-white flex items-center'>
                        <img src={Frame3} className='md:w-[60px] w-[40px] md:h-[60px] h-[40px]' />
                        <div className='ml-4 md:ml-6 '>
                            <h1 className='md:text-4xl text-xl  md:mt-2 mt-3'>
                            25+
                            </h1>
                            <p className='md:w-[180px] text-[11px] text-[9px] pb-4'>
                            Clients Worldwide
                            </p>
                        </div>
                    </div>
                    <div className='text-white flex items-center mt-4 md:mt-0 md:-ml-12'>
                        <img src={Frame4} className='md:w-[60px] w-[40px] md:h-[60px] h-[40px] -mt-3 md:mt-0' />
                        <div className='ml-4 md:ml-6'>
                            <h1 className='md:text-4xl text-xl  md:mt-2'>
                            300
                            </h1>
                            <p className='md:w-[80px] text-[11px] text-[9px] pb-4'>
                            Active Workers
                            </p>
                        </div>
                    </div>
                </div>
        </div>


        

        
    </div>
  );
  }