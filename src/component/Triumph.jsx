import React from 'react'
import mission from '../assets/mission.svg'
import vision from '../assets/vision.svg'

 const Triumph = () => {
  return (
    <div className="w-full h-full bg-white  ">
        <div className='md:max-w-[1028px] max-w-[600px] m-auto w-full h-[600px] flex md:flex-row flex-col md:justify-between  items-center md:mt-[0px] mt-[30px] '>
            <div className='md:w-[450px] w-[350px] md:h-[350px] bg-[#C4942D1A] '>
                <h1 className='w-[300px] md:text-4xl text-xl pb-[20px] ml-[30px] mt-[30px] text-[#C4942D]'>
                A prelude of Nexants Triumph

                </h1>
                <p className='md:w-[400px] w-[250px] text-sm pb-[40px] ml-[30px]'>
                Our alliances with globally renowned specialist organizations allow us to support clients in matters involving all divisions of engineering and construction, with no loss whatsoever in quality of deliverables

                </p>
                <div className='flex flex-row md:ml-[20px] ml-[20px] '>
                    
                    <div className='' >
                        <h1 className='md:text-4xl text-xl pb-[5px] md:ml-[40px] ml-[30px] text-[#C4942D]'>
                            30+
                        </h1>
                        <p className='md:w-[400px] w-[380px] md:text-[11px] text-[9px] pb-[20px] ml-[10px]'>
                        Projects completed
                        </p>
                        
                    </div>
                    <div className='-ml-[320px]' >
                        <h1 className='md:text-4xl text-xl pb-[5px] md:ml-[70px] ml-[60px] text-[#C4942D]'>
                            25+
                        </h1>
                        <p className='md:w-[400px] w-[380px] md:text-[11px] text-[9px] pb-[30px] ml-[25px]'>
                        Years of working experience
                        </p>
                        
                    </div>
                    <div className='-ml-[270px]' >
                        <h1 className='md:text-4xl text-xl pb-[5px] md:ml-[40px] ml-[20px] text-[#C4942D]'>
                            20+
                        </h1>
                        <p className='md:w-[400px] w-[380px] md:text-[11px] text-[9px] pb-[20px] ml-[30px]'>
                        Satisfied clients
                        </p>
                        
                    </div>
                    
                    
                </div>

            </div>
            <div className='md:w-[450px] w-[350px] md:h-[350px] bg-white flex md:flex-col flex-row md:mt-[0px] mt-[30px]'>
                <div className='md:bg-white bg-[#C4942D] w-[170px] h-[180px] rounded-lg md:mr-[0px] mr-[10px]'>
                    <img src={mission} className=' md:ml-[30px] ml-[10px] md:mt-[30px] mt-[5px] w-[40px]' />
                    <h1 className='w-[300px] md:text-2xl text-base pb-[5px] md:ml-[30px] ml-[10px] md:mt-[15px] mt-[5px] md:text-[#C4942D] text-white'>
                    Our Mission

                    </h1>
                    <p className='md:w-[400px] w-[155px] md:text-sm text-[10px]  md:ml-[30px] ml-[10px] md:text-black text-white'>
                    To deliver world class infrastructure and engineering consultancy services by reinforcing our worldwide corporate alliances and upholding top-tier quality and ethical standards'

                    </p>

                </div  >
                <div className='md:bg-white bg-[#C4942D] w-[170px] h-[180px] rounded-lg'>
                    <img src={vision} className=' md:ml-[30px] ml-[10px] md:mt-[30px] mt-[5px] w-[40px]' />
                    <h1 className='w-[300px] md:text-2xl text-base pb-[5px] md:ml-[30px] ml-[10px] md:mt-[15px] mt-[10px] md:text-[#C4942D] text-white'>
                    Vision
                    </h1>
                    <p className='md:w-[400px] w-[155px] md:text-sm text-[10px] md:ml-[30px] ml-[10px] md:text-black text-white'>
                    Globally setting a tradition of excellent Consultancy services that continually exceeds customer expectations

                    </p>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Triumph