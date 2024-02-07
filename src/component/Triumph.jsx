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
                <div className='flex flex-row  items-start md:ml-4 ml-2 '>
                    
                    <div className='mb-4 md:mb-0 md:mr-8 md:ml-4 ml-1' >
                        <h1 className='md:text-4xl text-xl pb-[5px] md:ml-[10px] ml-[40px] text-[#C4942D]'>
                            30+
                        </h1>
                        <p className='md:w-full md:max-w-[400px] text-[11px] text-[9px] pb-[20px] md:ml-0 ml-4'>
                        Projects completed
                        </p>
                        
                    </div>
                    <div className='mb-4 md:mb-0 md:mr-8 md:ml-4 ' >
                        <h1 className='md:text-4xl text-xl pb-[5px] md:ml-[30px] ml-[55px] text-[#C4942D]'>
                            25+
                        </h1>
                        <p className='md:w-full md:max-w-[400px] text-[11px] text-[9px] pb-[30px] md:ml-0 ml-4'>
                        Years of working experience
                        </p>
                        
                    </div>
                    <div className='md:ml-4 ml-2' >
                        <h1 className='md:text-4xl text-xl pb-[5px] md:ml-[0px] ml-[20px] text-[#C4942D]'>
                            20+
                        </h1>
                        <p className='md:w-full md:max-w-[400px] text-[11px] text-[9px] pb-[20px] md:ml-0 ml-2'>
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
                    <p className='md:w-[400px] w-[155px] md:text-sm text-[10px]  md:ml-[30px] ml-[10px] md:text-[#434344] text-white'>
                    To deliver world class infrastructure and engineering consultancy services by reinforcing our worldwide corporate alliances and upholding top-tier quality and ethical standards'

                    </p>

                </div  >
                <div className='md:bg-white bg-[#C4942D] w-[170px] h-[180px] rounded-lg'>
                    <img src={vision} className=' md:ml-[30px] ml-[10px] md:mt-[30px] mt-[5px] w-[40px]' />
                    <h1 className='w-[30px] md:text-2xl text-base pb-[5px] md:ml-[30px] ml-[10px] md:mt-[15px] mt-[10px] md:text-[#C4942D] text-white'>
                    Vision
                    </h1>
                    <p className='md:w-[400px] w-[155px] md:text-sm text-[10px] md:ml-[30px] ml-[10px] md:text-[#434344] text-white'>
                    Globally setting a tradition of excellent Consultancy services that continually exceeds customer expectations

                    </p>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Triumph