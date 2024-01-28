import React from 'react';
import group8 from '../assets/group8.png'
import Frame1 from '../assets/Frame1.png'
import Frame2 from '../assets/Frame2.png'
import Frame3 from '../assets/Frame3.png'
import Frame4 from '../assets/Frame4.png'

export default function Bar() {

  
  return (
    <div className='w-full'>
        
        <img src={group8} 
        className ='w-full md:h-[200px] h-[260px] '
        
        
        />
        <div className='flex md:pl-[10%] pl-[10%] md:mt-[-120px] mt-[-250px] md:pb-[0px] pb-[80px] '>
                    
                    <div className='flex md:flex-row flex-col'>
                        <div className=' text-white flex' >
                            <img src={Frame1} className='md:w-[60px] w-[40px] md:h-[60px] h-[40px] '/>
                            <div>
                                <h1 className='md:text-4xl text-lg pb-[5px] md:ml-[40px] ml-[30px] '>
                                    10 Years+
                                </h1>
                                <p className='md:w-[400px] w-[380px] md:text-[11px] text-[9px] pb-[20px] md:ml-[70px] ml-[50px]'>
                                In Business
                                </p>
                            </div>
                            
                        </div>
                        <div className='md:-ml-[180px] text-white flex' >
                            <img src={Frame2} className='md:w-[60px] w-[40px] md:h-[60px] h-[40px] '/>
                            <div>
                            <h1 className='md:text-4xl text-xl pb-[5px] md:ml-[50px] ml-[50px] '>
                                30+
                            </h1>
                            <p className='md:w-[400px] w-[380px] md:text-[11px] text-[9px] pb-[30px] md:ml-[25px] ml-[30px]'>
                            Projects Completed
                            </p>
                            </div>
                            
                        </div>
                    </div>
                    
                    <div className='flex md:flex-row flex-col md:-ml-[0px] -ml-[250px]'>
                        <div className='md:-ml-[190px] text-white flex ' >
                            <img src={Frame3} className='md:w-[60px] w-[40px] md:h-[60px] h-[40px] '/>
                        <div>
                        <h1 className='md:text-4xl text-xl pb-[5px] md:ml-[40px] ml-[40px] '>
                                25+
                            </h1>
                            <p className='md:w-[400px] w-[380px] md:text-[11px] text-[9px] pb-[20px] md:ml-[30px] ml-[20px]'>
                            Clients Worldwide
                            </p>
                        </div>
                            
                        </div>
                        <div className='md:-ml-[220px] text-white flex ' >
                            <img src={Frame4} className='md:w-[60px] w-[40px] md:h-[60px] h-[40px] '/>
                        <div>
                        <h1 className='md:text-4xl text-xl pb-[5px] md:ml-[40px] ml-[40px] '>
                                300
                            </h1>
                            <p className='md:w-[400px] w-[380px] md:text-[11px] text-[9px] pb-[20px] md:ml-[40px] ml-[30px]'>
                            Active Workers
                            </p>
                        </div>
                            
                        </div>
                    </div>
                    
                    
                </div>

        
    </div>
  );
  }