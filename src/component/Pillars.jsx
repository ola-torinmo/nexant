import React from 'react'
import pillar from '../assets/pillar.png'

export default function Pillars  ()  {
  return (
    
        <div className="w-full bg-white py-10">
            <div className="2xl:max-w-[1536px] md:max-w-[1028px] max-w-[600px] m-auto grid md:grid-cols-2 ipad-prov:px-[5%]">
                <div className="flex flex-col justify-start gap-2 md:pl-[0px] pl-[7%] 2xl:pt-[100px]">
                    <h1 className="2xl:text-4xl md:text-3xl text-2xl md:w-[565px] md:text-left text-center text-[#C4942D] font-semibold pb-8 ">Four Pillars Of Strength</h1>
                    <p className="2xl:w-[633px] md:w-[533px] w-[333px] 2xl:text-lg text-base pb-8 md:pl-0 pl-5 leading-loose">We’re An Indigenous ISO Certified Consultancy Firm in Engineering Design & Construction Supervision. The 1st and Currently still the only Indigenous ISO Certified Railway Consultancy Firm in Nigeria.</p>
                    <div>
                        <ul className="2xl:text-xl text-lg font-medium pb-5 md:pl-0 pl-5 list-disc list-inside marker:text-green">
                            <li className='pb-8 '>ENGINEERING DESIGNS</li>
                            <li className='pb-8'>CONSTRUCTION SUPERVISION</li>
                            <li className='pb-8'>QUALITY ASSURANCE & CONTROL</li>
                            <li className='pb-8'>RAILWAY OPERATIONAL CONSULTANCY SERVICES</li>
                            
                        </ul>
                    </div>
                    
                </div>
                <img className=" md:w-[80%] w-[70%] ml-[20%]" src={pillar}/>
            </div>
            <p className="md:w-[533px] w-[370px] md:text-lg text-base font-semibold text-center md:ml-[30%] pt-[30px] pb-8 md:pl-0 pl-5 leading-relaxed">. . .delivering valued engineered infrastructure projects.</p>

        </div>
 );
}
