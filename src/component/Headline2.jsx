import React from 'react'
// import png1 from '../assets/1.png'
// import completed from '../assets/completed.png'

function Headline2 (props) {
  return (
    <div className='w-screen h-full'>
        <div className='2xl:max-w-[1536px] md:max-w-[1028px] max-w-[600px] m-auto w-full h-[900px] flex md:flex-row flex-col md:justify-between  items-center  md:pt-[0px] pt-[50px] md:mt-[-160px] mt-[30px]'>
            <div> 
                 <div className='flex'>
                    <img src={props.img} alt="" className='w-12 h-6 mt-[40px]' />
                    <img src={props.png} className='pl-[70px] md:h-[100px] h-[60px]' alt="" />
                 </div>
                 <h1 className='2xl:text-5xl md:text-3xl text-base 2xl:w-[600px] md:w-[400px] w-[330px] md:mt-[-20px] md:text-left text-center md:pb-[20px] pb-[20px] leading-10' >Design and construction of head over bridge </h1>
                 <p className='2xl:text-xl md:text-base text-xs md:w-[500px] w-[330px]'>International bewrey plc,Lagos state</p>
            </div>
           <div>
                <p className='2xl:text-xl md:text-base text-xs 2xl:w-[700px] md:w-[500px] w-[330px] pt-[30px]'>Nexant Consulting Limited is an Indigenous ISO Certified Consultancy Firm in Engineering Design & Construction Supervisions. Nexant is also the 1st and Currently still the only Indigenous ISO Certified Railway Consultancy Firm in Nigeria, we are a registered member of the Council for the Regulation of Engineering in Nigeria (COREN) and Association for Consulting Engineering in Nigeria (ACEN).</p>
           </div>

        </div>

    </div>
  )
}

export default Headline2;
