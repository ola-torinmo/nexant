import React from 'react'
import frame1 from '../assets/Frameus1.svg'
import frame2 from '../assets/Frameus2.svg'
import frame3 from '../assets/Frameus3.svg'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <div className='w-full h-full bg-[#C4942D1A]'>
        <div className='md:max-w-[1028px] max-w-[600px] 2xl:max-w-[1536px] m-auto w-full md:h-[900px] h-[1100px] 2xl:h-[1000px] '>


            <div >
                    <p className='text-[#C4942D] 2xl:text-xl text-[11px] pb-[10px] text-center'>About us</p>
                    <h1 className='md:text-3xl 2xl:text-5xl text-lg pb-[20px] text-center 2xl:ml-[350px] md:ml-[200px] ml-[50px] 2xl:w-[800px] md:w-[600px] w-[300px] pb-[50px] 2xl:leading-normal'> Architects of Excellence, Pioneering Innovation in Construction.</h1>
                <div className=' md:space-x-12 2xl:-space-x-[220px] flex md:flex-row flex-col items-center 2xl:justify-around md:pb-[40px] pb-[20px] 2xl:pb-[50px] '>
                    

                    <div class="2xl:w-[600px] md:w-[560px] w-[320px] 2xl:h-[300px] md:h-[270px] h-[200px]  p-6 border border-gray-200 rounded-lg bg-custom-background md:mb-[0px] mb-[20px]  " >
                    <img src={frame1} className='2xl:pb-[15px] pb-[10px] md:w-[70px] w-[40px]'/>
                        
                        <a href="#">
                            <h1 class="mb-2 2xl:text-3xl md:text-2xl text-base font-semibold tracking-tight md:pb-[10px] pb-[1px] text-white">Engineering design</h1>
                        </a>
                        <p class="mb-3 font-normal 2xl:text-sm md:text-[12px] text-[9px] text-white">Designing Tomorrow, Building Today: Nexant's Engineering Design Services Combine Visionary Creativity with Technical Precision, Crafting Blueprints That Transcend Expectations and Set the Foundation for Enduring Structures</p>
                        
                    </div>
                       <div class="2xl:w-[600px] md:w-[560px] w-[320px] 2xl:h-[300px] md:h-[270px] h-[200px] p-6 border border-gray-200 rounded-lg bg-white  " >
                        
                        <img src={frame2} className='2xl:pb-[15px] pb-[10px] md:w-[70px] w-[40px]'/>
                        
                        
                        <a href="#">
                            <h1 class="mb-2 2xl:text-3xl md:text-2xl text-base font-semibold tracking-tight text-[#C4942D]  md:pb-[10px] pb-[1px]">Construction Supervision</h1>
                        </a>
                        <p class="mb-3 font-normal  2xl:text-sm md:text-[12px] text-[9px]">Guiding Excellence, Ensuring Precision: Nexant's Construction Supervision Services Go Beyond Oversight, Orchestrating a Symphony of Expertise to Transform Blueprints into Living Structures, Where Every Detail Matters and Quality Prevails</p>
                        
                    </div>

                </div>
                <div className=' md:space-x-12 2xl:-space-x-[220px] flex md:flex-row flex-col md:justify-between  items-center 2xl:justify-around '>
                    

                    <div class="2xl:w-[600px] md:w-[560px] w-[320px] 2xl:h-[300px] md:h-[270px] h-[200px]  p-6 border border-gray-200 rounded-lg bg-white md:mb-[0px] mb-[20px]  " >
                        <img src={frame3} className='2xl:pb-[15px] pb-[10px] md:w-[70px] w-[40px]'/>
                        
                        <a href="#">
                            <h1 class="mb-2 2xl:text-3xl md:text-2xl text-base font-semibold tracking-tight text-[#C4942D] md:pb-[10px] pb-[1px] ">Quality Assurance and control</h1>
                        </a>
                        <p class="mb-3 font-normal  2xl:text-sm md:text-[12px] text-[9px] ">Excellence in Every Detail. We ensure the Pinnacle of Precision, Employing Rigorous Standards and Unyielding Commitment to Guarantee the Delivery of Impeccable Results, Redefining the Benchmark for Unmatched Quality in Construction</p>
                        
                    </div>
                    <div class="2xl:w-[600px] md:w-[560px] w-[320px] 2xl:h-[300px] md:h-[270px] h-[200px]  p-6 border border-gray-200 rounded-lg bg-white md:mb-[0px] mb-[20px] " >
                        
                        <img src={frame3} className='2xl:pb-[15px] pb-[5px] md:w-[70px] w-[40px]'/>
                        
                        
                        <a href="#">
                            <h1 class="mb-2 2xl:text-3xl md:text-2xl text-base font-semibold tracking-tight text-[#C4942D]  md:pb-[10px] pb-[px] 2xl:w-[500px] md:w-[400px] w-[260px] ">Railway operational and consultancy services</h1>
                        </a>
                        <p class="mb-3 font-normal  2xl:text-sm md:text-[12px] text-[9px]">We navigate the Tracks of Excellence, Offering a Specialized Approach that Redefines Railway Solutions. From Strategic Planning to Seamless Operations, Trust Nexant to Drive Your Railway Projects Forward with Unmatched Expertise and Industry Insight</p>
                        
                    </div>

                </div>
                <Link to="service">
                <button className="bg-[#C4942D] text-[#fff] 2xl:px-12 2xl:py-3 px-6 py-2 rounded-md text-sm 2xl:mt-[30px] md:mt-[70px] 2xl:ml-[690px]  md:ml-[455px] ml-[145px]">Learn More</button>
                </Link>
            </div>
        
        </div>
    </div>
  )
}


export default Services;