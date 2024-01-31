import React from 'react'
import Pro1 from '../assets/Pro1.png';
import Pro2 from '../assets/Pro2.png';
import Pro3 from '../assets/Pro3.png';
import Pro4 from '../assets/Pro4.png';
import Elipse from '../assets/Ellipse.svg';

const Projects = () => {
  return (
    <div className="w-full h-full bg-white  ">
        <div className='md:max-w-[1028px] max-w-[600px] h-[600px]  md:pt-[50px] md:mt-[100px] mt-[50px] '>
          <div className='text-center md:pl-[150px] relative z-40  '>
              <p className='text-[#C4942D] text-[11px] pb-[10px] md:ml-[130px] '>Our projects</p>
              <h1 className='md:text-3xl text-[lg] md:ml-[200px] md:w-[600px] w-[400px] pb-[10px]'>Our Latest projects showcase</h1>
              <p className=' md:text-[13px] text-[11px] md:w-[700px] w-[300px] md:ml-[150px] ml-[50px] pb-[px]  '>To deliver world class infrastructure and engineering consultancy services by reinforcing our worldwide corporate alliances and upholding top-tier quality and ethical standards'</p>
          </div>

         <div className=' w-full md:-mt-[100px] -mt-[70px] md:pl-[0%] pl-[%]  ' >
           <img className='relative z-20 w-full md:w-[1500px] h-[200px] md:ml-[115px]  ' src={Elipse} />
            <div className='flex space-x-4 proframe -mt-[100px] md:ml-[115px]  '>
                <img src={Pro2} className='md:w-[245px] w-[22%] md:h-[600px] h-[350px]' />
                <img src={Pro3} className='md:w-[245px] w-[22%] md:h-[500px] h-[300px]' />
                <img src={Pro4} className='md:w-[245px] w-[22%] md:h-[500px] h-[300px]' />
                <img src={Pro1} className='md:w-[245px] w-[22%] md:h-[500px] h-[300px] '  />

            </div>
            <img className='relative z-20 w-full md:w-[1500px] h-[200px]  md:ml-[115px]  md:mt-[300px] mt-[100px] ' src={Elipse} />
          </div>  
        </div>

    </div>
  )
}

export default Projects