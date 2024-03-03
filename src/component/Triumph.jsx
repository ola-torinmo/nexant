import React from 'react'
import mission from '../assets/mission.svg'
import vision from '../assets/vision.svg'

 const Triumph = () => {
  return (
    <div className="w-full h-full bg-white  ">
        <div className='md:max-w-[1028px] max-w-[600px] 2xl:max-w-[1536px] m-auto w-full h-[600px] flex md:flex-row flex-col md:justify-between 2xl:justify-between  items-center md:mt-[0px] mt-[30px] ipad-prov:px-[5%] ipad-v:px-[2%]'>
            <div className='2xl:w-[600px] md:w-[450px] w-[350px] md:h-[350px] 2xl:h-[400px] bg-[#C4942D1A] '>
                <h1 className='w-[300px] 2xl:w-[400px] 2xl:text-5xl md:text-4xl text-xl pb-[20px] 2xl:ml-[80px] ml-[30px] 2xl:mt-[40px] mt-[30px] text-[#C4942D]'>
                A prelude of Nexants Triumph

                </h1>
                <p className='2xl:w-[450px] md:w-[400px] w-[250px] 2xl:text-base text-sm pb-[40px] 2xl:ml-[80px] ml-[30px]'>
                Our alliances with globally renowned specialist organizations allow us to support clients in matters involving all divisions of engineering and construction, with no loss whatsoever in quality of deliverables

                </p>
                <div className='flex flex-row  items-start md:ml-4 ml-2 2xl:ml-[60px] '>
                    
                    <div className='mb-4 md:mb-0 md:mr-8 md:ml-4 ml-1' >
                        <h1 className='2xl:text-5xl md:text-4xl text-xl pb-[5px] md:ml-[10px] ml-[40px] text-[#C4942D]'>
                            30+
                        </h1>
                        <p className='md:w-full md:max-w-[400px] 2xl:text-[13px] md:text-[11px] text-[9px] pb-[20px] md:ml-0 ml-4'>
                        Projects completed
                        </p>
                        
                    </div>
                    <div className='mb-4 md:mb-0 md:mr-8 md:ml-4 ' >
                        <h1 className='2xl:text-5xl md:text-4xl text-xl pb-[5px] md:ml-[30px] ml-[55px] text-[#C4942D]'>
                            25+
                        </h1>
                        <p className='md:w-full md:max-w-[400px] 2xl:text-[13px] md:text-[11px] text-[9px] pb-[30px] md:ml-0 ml-4'>
                        Years of working experience
                        </p>
                        
                    </div>
                    <div className='md:ml-4 ml-2' >
                        <h1 className='2xl:text-5xl md:text-4xl text-xl pb-[5px] md:ml-[0px] ml-[20px] text-[#C4942D]'>
                            20+
                        </h1>
                        <p className='md:w-full md:max-w-[400px] 2xl:text-[13px] md:text-[11px] text-[9px] pb-[20px] md:ml-0 ml-2'>
                        Satisfied clients
                        </p>
                        
                    </div>
                    
                    
                </div>

            </div>
            <div className='2xl:w-[650px] md:w-[450px]  w-[350px] md:h-[350px] bg-white flex md:flex-col flex-row 2xl:mt-[0px] mt-[30px] ipad-v:mt-[-40px]'>
                <div className='md:bg-white bg-[#C4942D] w-[170px] h-[180px] rounded-lg md:mr-[0px] mr-[10px] 2xl:mt-[-20px]'>
                    <img src={mission} className=' md:ml-[30px] ml-[10px] md:mt-[30px] ipad-v:pb-[-px] mt-[5px] w-[40px]' />
                    <h1 className='w-[300px] md:text-2xl 2xl:text-3xl text-base 2xl:pb-[0px] pb-[5px] md:ml-[30px] ml-[10px] ipad-v:mt-[px]  md:mt-[15px] mt-[5px] md:text-[#C4942D] text-white'>
                    Our Mission

                    </h1>
                    <p className='2xl:w-[500px] md:w-[400px] w-[155px] md:text-sm 2xl:text-base text-[10px] ipad-v:w-[310px] ipad-v:mt-[-4px]  md:ml-[30px] ml-[10px] md:text-[#434344] text-white'>
                    To deliver world class infrastructure and engineering consultancy services by reinforcing our worldwide corporate alliances and upholding top-tier quality and ethical standards'

                    </p>

                </div  >
                <div className='md:bg-white bg-[#C4942D] w-[170px] h-[180px] rounded-lg 2xl:mt-[30px] ipad-v:mt-[12px]'>
                    <img src={vision} className=' md:ml-[30px] ml-[10px] md:mt-[30px] mt-[5px] w-[40px]' />
                    <h1 className='w-[30px] md:text-2xl 2xl:text-3xl text-base pb-[5px] md:ml-[30px] ml-[10px] md:mt-[15px] mt-[10px]  md:text-[#C4942D] text-white'>
                    Vision
                    </h1>
                    <p className='2xl:w-[500px] md:w-[400px] ipad-v:mt-[-4px] ipad-v:w-[310px] w-[155px] md:text-sm 2xl:text-base text-[10px] md:ml-[30px] ml-[10px] md:text-[#434344] text-white'>
                    Globally setting a tradition of excellent Consultancy services that continually exceeds customer expectations

                    </p>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Triumph