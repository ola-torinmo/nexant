import React from 'react'
import frame1 from '../assets/Frameus1.svg'
import frame2 from '../assets/Frameus2.svg'
import frame3 from '../assets/Frameus3.svg'

const Services = () => {
  return (
    <div className='w-full h-full bg-[#C4942D1A]'>
        <div className='md:max-w-[1028px] max-w-[600px] m-auto w-full h-[900px] pt-[50px]'>
        <p className='text-[#C4942D] text-[11px] pb-[10px] text-center'>About us</p>
        <h1 className='text-3xl pb-[20px] text-center ml-[200px] w-[600px] pb-[50px]'> Architects of Excellence, Pioneering Innovation in Construction.</h1>

        <div>
            <div className=' space-x-12 flex justify-between  items-center pb-[20px]'>
                

                <div class="w-[560px] h-[270px]  p-6 border border-gray-200 rounded-lg bg-custom-background  " >
                <img src={frame1} className='pb-[10px]'/>
                    
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-semibold tracking-tight pb-[10px] text-white">Engineering design</h5>
                    </a>
                    <p class="mb-3 font-normal text-[12px] text-white">Designing Tomorrow, Building Today: Nexant's Engineering Design Services Combine Visionary Creativity with Technical Precision, Crafting Blueprints That Transcend Expectations and Set the Foundation for Enduring Structures</p>
                    
                </div>
                <div class="w-[560px] h-[270px]  p-6 border border-gray-200 rounded-lg bg-white  " >
                    
                    <img src={frame2} className='pb-[10px]'/>
                    
                    
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-[#C4942D]  pb-[10px]">Construction Supervision</h5>
                    </a>
                    <p class="mb-3 font-normal text-[12px]">Guiding Excellence, Ensuring Precision: Nexant's Construction Supervision Services Go Beyond Oversight, Orchestrating a Symphony of Expertise to Transform Blueprints into Living Structures, Where Every Detail Matters and Quality Prevails</p>
                    
                </div>

            </div>
            <div className=' space-x-12 flex justify-between  items-center '>
                

                <div class="w-[560px] h-[270px]  p-6 border border-gray-200 rounded-lg bg-white  " >
                <img src={frame3} className='pb-[10px]'/>
                    
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-semibold tracking-tight pb-[10px] text-[#C4942D]  ">Quality Assurance and control</h5>
                    </a>
                    <p class="mb-3 font-normal text-[12px] ">Excellence in Every Detail. We ensure the Pinnacle of Precision, Employing Rigorous Standards and Unyielding Commitment to Guarantee the Delivery of Impeccable Results, Redefining the Benchmark for Unmatched Quality in Construction</p>
                    
                </div>
                <div class="w-[560px] h-[270px]  p-6 border border-gray-200 rounded-lg bg-white  " >
                    
                    <img src={frame3} className='pb-[10px]'/>
                    
                    
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-[#C4942D]  pb-[10px]">Railway operational and consultancy services</h5>
                    </a>
                    <p class="mb-3 font-normal text-[12px]">We navigate the Tracks of Excellence, Offering a Specialized Approach that Redefines Railway Solutions. From Strategic Planning to Seamless Operations, Trust Nexant to Drive Your Railway Projects Forward with Unmatched Expertise and Industry Insight</p>
                    
                </div>

            </div>
            <button className="bg-[#C4942D] text-[#fff] px-6 py-2 rounded-md text-sm mt-[30px] ml-[455px]">Learn More</button>
        </div>
        
        </div>
    </div>
  )
}


export default Services;