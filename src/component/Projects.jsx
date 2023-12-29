import React from 'react'
import Pro1 from '../assets/pro1.png';
import Pro2 from '../assets/pro2.png';
import Pro3 from '../assets/pro3.png';
import Pro4 from '../assets/pro4.png';
import Elipse from '../assets/Ellipse.svg';

const Projects = () => {
  return (
    <div className="w-full h-full bg-white  ">
        <div className='md:max-w-[1028px] max-w-[600px] h-[600px]  pt-[50px] '>
         <div className='text-center pl-[150px] relative z-40  '>
            <p className='text-[#C4942D] text-[11px] pb-[10px] ml-[130px] '>Our projects</p>
            <h1 className='text-3xl   ml-[200px] w-[600px] pb-[10px]'>Our Latest projects showcase</h1>
            <p className=' text-[13px] w-[700px] ml-[150px] pb-[px]  '>To deliver world class infrastructure and engineering consultancy services by reinforcing our worldwide corporate alliances and upholding top-tier quality and ethical standards'</p>
         </div>

         <div className=' -mt-[100px] ' >
           <img className='relative z-20 w-[1500px] h-[200px]  ml-[115px]' src={Elipse} />
            <div className='flex space-x-3 proframe -mt-[100px] ml-[115px]  '>
                <img src={Pro1} className='w-[248px] h-[500px] pro1'  />
                <img src={Pro2} className='w-[248px] h-[500px]' />
                <img src={Pro3} className='w-[248px] h-[500px]' />
                <img src={Pro4} className='w-[248px] h-[500px]' />

            </div>
            <img className='relative z-20 w-[1500px] h-[200px]  ml-[115px] mt-[300px] ' src={Elipse} />
          </div>  
        </div>

    </div>
  )
}

export default Projects