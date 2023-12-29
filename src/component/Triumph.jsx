import React from 'react'
import mission from '../assets/mission.svg'
import vision from '../assets/vision.svg'

 const Triumph = () => {
  return (
    <div className="w-full h-full bg-white  ">
        <div className='md:max-w-[1028px] max-w-[600px] m-auto w-full h-[600px] flex justify-between  items-center '>
            <div className='w-[450px] h-[350px] bg-[#C4942D1A] '>
                <h1 className='w-[300px] text-4xl pb-[20px] ml-[30px] mt-[30px] text-[#C4942D]'>
                A prelude of Nexants Triumph

                </h1>
                <p className='w-[400px] text-sm pb-[40px] ml-[30px]'>
                Our alliances with globally renowned specialist organizations allow us to support clients in matters involving all divisions of engineering and construction, with no loss whatsoever in quality of deliverables

                </p>
                <div className='flex flex-row '>
                    <div className='' >
                        <h1 className='text-4xl pb-[5px] ml-[40px] text-[#C4942D]'>
                            30+
                        </h1>
                        <p className='w-[400px] text-[11px] pb-[20px] ml-[30px]'>
                        Projects completed
                        </p>
                        
                    </div>
                    <div className='-ml-[320px]' >
                        <h1 className='text-4xl pb-[5px] ml-[70px] text-[#C4942D]'>
                            25+
                        </h1>
                        <p className='w-[400px] text-[11px] pb-[20px] ml-[30px]'>
                        Years of working experience
                        </p>
                        
                    </div>
                    <div className='-ml-[270px]' >
                        <h1 className='text-4xl pb-[5px] ml-[40px] text-[#C4942D]'>
                            20+
                        </h1>
                        <p className='w-[400px] text-[11px] pb-[20px] ml-[30px]'>
                        Satisfied clients
                        </p>
                        
                    </div>
                    
                    
                </div>

            </div>
            <div className='w-[450px] h-[350px] bg-white '>
                <div>
                <img src={mission} className=' ml-[30px] mt-[30px] w-[40px]' />
                <h1 className='w-[300px] text-2xl pb-[10px] ml-[30px] mt-[15px] text-[#C4942D]'>
                Our Mission

                </h1>
                <p className='w-[400px] text-sm  ml-[30px]'>
                To deliver world class infrastructure and engineering consultancy services by reinforcing our worldwide corporate alliances and upholding top-tier quality and ethical standards'

                </p>

                </div>
                <div>
                <img src={vision} className=' ml-[30px] mt-[20px] w-[40px]' />
                <h1 className='w-[300px] text-2xl pb-[10px] ml-[30px] mt-[15px] text-[#C4942D]'>
                Vision
                </h1>
                <p className='w-[400px] text-sm  ml-[30px]'>
                Globally setting a tradition of excellent Consultancy services that continually exceeds customer expectations

                </p>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Triumph