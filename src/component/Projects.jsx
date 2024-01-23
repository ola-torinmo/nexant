import React from 'react'
import Pro1 from '../assets/pro1.png';
import Pro2 from '../assets/pro2.png';
import Pro3 from '../assets/pro3.png';
import Pro4 from '../assets/pro4.png';
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

         <div className=' md:-mt-[100px] -mt-[70px] ' >
           <img className='relative z-20 w-[1500px] h-[200px]  md:ml-[115px] ml-[5px]' src={Elipse} />
            <div className='flex space-x-3 proframe -mt-[100px] md:ml-[115px] ml-[7px]  '>
                <img src={Pro1} className='md:w-[248px] w-[85px] md:h-[500px] h-[330px] '  />
                <img src={Pro2} className='md:w-[248px] w-[85px] md:h-[500px] h-[330px]' />
                <img src={Pro3} className='md:w-[248px] w-[85px] md:h-[500px] h-[330px]' />
                <img src={Pro4} className='md:w-[248px] w-[85px] md:h-[500px] h-[330px]' />

            </div>
            <img className='relative z-20 w-[1500px] h-[200px]  md:ml-[115px] ml-[5px] md:mt-[300px] mt-[130px] ' src={Elipse} />
          </div>  
        </div>

    </div>
  )
}

export default Projects