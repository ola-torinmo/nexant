import React from 'react';
import group8 from '../assets/Group8.png'
import Frame1 from '../assets/Frame1.png'
import Frame2 from '../assets/Frame2.png'
import Frame3 from '../assets/Frame3.png'
import Frame4 from '../assets/Frame4.png'

export default function Bar() {

  
  return (
    <div className='w-full 2xl:mt-[00px]'>
        
        <img src={group8} 
        className ='w-full md:h-[200px] h-[260px] '
        
        
        />
            
        <div className='flex 2xl:pl-[20%] md:pl-[18%] pl-[14%] md:mt-[-150px] mt-[-250px] md:pb-[0px] pb-[80px] my-[5%] ipad-prov:px-[5%] ipad-v:px-[3%] ipad-h:px-[8%]'>
                <div className='flex md:flex-row flex-col md:mt-0 mt-'>
                    <div className=' flex items-center'>
                        <img src={Frame1} className='2xl:w-[80px] md:w-[60px] w-[40px] 2xl:h-[80px] md:h-[60px] h-[40px]' />
                        <div className='2xl:ml-6 ml-4 md:ml- mt-4 '>
                            <h1 className='2xl:text-5xl md:text-4xl text-lg text-white'>
                            10 Years+
                            </h1>
                            <p className='md:w-[180px] 2xl:text-[16px] text-[11px] text-[9px] pb-4 text-white'>
                            In Business
                            </p>
                        </div>
                    </div>
                    <div className='text-white flex items-center 2xl:ml-4 '>
                        <img src={Frame2} className='2xl:w-[80px] md:w-[60px] w-[40px] 2xl:h-[80px] md:h-[60px] h-[40px] -mt-2 md:mt-0' />
                        <div className='2xl:ml-6 ml-4 ml- md:mt-5 mt-3'>
                            <h1 className='2xl:text-5xl md:text-4xl text-xl text-white '>
                            30+
                            </h1>
                            <p className='md:w-[180px] 2xl:text-[16px] text-[11px] text-[9px] pb-6 text-white'>
                            Projects Completed
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flex md:flex-row flex-col ml-6 md:-ml-10 2xl:-ml-4 '>
                    <div className='text-white flex items-center'>
                        <img src={Frame3} className='2xl:w-[80px] md:w-[60px] w-[40px] 2xl:h-[80px] md:h-[60px] h-[40px]' />
                        <div className=' 2xl:ml-6 ml-4 md:ml-6 '>
                            <h1 className='2xl:text-5xl md:text-4xl text-xl  md:mt-2 mt-4 text-white'>
                            25+
                            </h1>
                            <p className='md:w-[180px] 2xl:text-[16px] text-[11px] text-[9px] pb-4 text-white'>
                            Clients Worldwide
                            </p>
                        </div>
                    </div>
                    <div className='text-white flex items-center mt-4 md:mt-0 md:-ml-12 2xl:-ml-4'>
                        <img src={Frame4} className='2xl:w-[80px] md:w-[60px] w-[40px] 2xl:h-[80px] md:h-[60px] h-[40px] -mt-4 md:mt-0' />
                        <div className='2xl:ml-6 ml-4 md:ml-6'>
                            <h1 className='2xl:text-5xl md:text-4xl text-xl  md:mt-2 -mt-2 text-white'>
                            300
                            </h1>
                            <p className='2xl:w-[150px] md:w-[80px] 2xl:text-[16px] text-[11px] text-[9px] pb-4 text-white'>
                            Active Workers
                            </p>
                        </div>
                    </div>
                </div>
        </div>


        

        
    </div>
  );
  }