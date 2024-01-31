import React from 'react'
import frame1 from '../assets/Frameus1.svg'
import frame2 from '../assets/Frameus2.svg'
import frame3 from '../assets/Frameus3.svg'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <div className='w-full h-full bg-[#C4942D1A]'>
        <div className='md:max-w-[1028px] max-w-[600px] m-auto w-full md:h-[900px] h-[1100px]  '>


            <div>
                    <p className='text-[#C4942D] text-[11px] pb-[10px] text-center'>About us</p>
                    <h1 className='md:text-3xl text-lg pb-[20px] text-center md:ml-[200px] ml-[50px] md:w-[600px] w-[300px] pb-[50px]'> Architects of Excellence, Pioneering Innovation in Construction.</h1>
                <div className=' md:space-x-12 flex md:flex-row flex-col md:justify-between  items-center pb-[20px]'>
                    

                    <div class="md:w-[560px] w-[320px] md:h-[270px] h-[200px]  p-6 border border-gray-200 rounded-lg bg-custom-background md:mb-[0px] mb-[20px]  " >
                    <img src={frame1} className='pb-[10px] md:w-[70px] w-[40px]'/>
                        
                        <a href="#">
                            <h5 class="mb-2 md:text-2xl text-base font-semibold tracking-tight md:pb-[10px] pb-[1px] text-white">Engineering design</h5>
                        </a>
                        <p class="mb-3 font-normal md:text-[12px] text-[9px] text-white">Designing Tomorrow, Building Today: Nexant's Engineering Design Services Combine Visionary Creativity with Technical Precision, Crafting Blueprints That Transcend Expectations and Set the Foundation for Enduring Structures</p>
                        
                    </div>
                    <div class="md:w-[560px] w-[320px] md:h-[270px] h-[200px] p-6 border border-gray-200 rounded-lg bg-white  " >
                        
                        <img src={frame2} className='pb-[10px] md:w-[70px] w-[40px]'/>
                        
                        
                        <a href="#">
                            <h5 class="mb-2 md:text-2xl text-base font-semibold tracking-tight text-[#C4942D]  md:pb-[10px] pb-[1px]">Construction Supervision</h5>
                        </a>
                        <p class="mb-3 font-normal md:text-[12px] text-[9px]">Guiding Excellence, Ensuring Precision: Nexant's Construction Supervision Services Go Beyond Oversight, Orchestrating a Symphony of Expertise to Transform Blueprints into Living Structures, Where Every Detail Matters and Quality Prevails</p>
                        
                    </div>

                </div>
                <div className=' md:space-x-12 flex md:flex-row flex-col md:justify-between   items-center '>
                    

                    <div class="md:w-[560px] w-[320px] md:h-[270px] h-[200px]  p-6 border border-gray-200 rounded-lg bg-white md:mb-[0px] mb-[20px] " >
                        <img src={frame3} className='pb-[10px] md:w-[70px] w-[40px]'/>
                        
                        <a href="#">
                            <h5 class="mb-2 md:text-2xl text-base font-semibold tracking-tight text-[#C4942D] md:pb-[10px] pb-[1px] ">Quality Assurance and control</h5>
                        </a>
                        <p class="mb-3 font-normal md:text-[12px] text-[9px] ">Excellence in Every Detail. We ensure the Pinnacle of Precision, Employing Rigorous Standards and Unyielding Commitment to Guarantee the Delivery of Impeccable Results, Redefining the Benchmark for Unmatched Quality in Construction</p>
                        
                    </div>
                    <div class="md:w-[560px] w-[320px] md:h-[270px] h-[200px]  p-6 border border-gray-200 rounded-lg bg-white md:mb-[0px] mb-[20px] " >
                        
                        <img src={frame3} className='pb-[5px] md:w-[70px] w-[40px]'/>
                        
                        
                        <a href="#">
                            <h5 class="mb-2 md:text-2xl text-base font-semibold tracking-tight text-[#C4942D] md:pb-[10px] pb-[px] md:w-[400px] w-[260px] ">Railway operational and consultancy services</h5>
                        </a>
                        <p class="mb-3 font-normal md:text-[12px] text-[9px]">We navigate the Tracks of Excellence, Offering a Specialized Approach that Redefines Railway Solutions. From Strategic Planning to Seamless Operations, Trust Nexant to Drive Your Railway Projects Forward with Unmatched Expertise and Industry Insight</p>
                        
                    </div>

                </div>
                <Link to="service">
                <button className="bg-[#C4942D] text-[#fff] px-6 py-2 rounded-md text-sm mt-[30px] md:ml-[455px] ml-[145px]">Learn More</button>
                </Link>
            </div>
        
        </div>
    </div>
  )
}


export default Services;