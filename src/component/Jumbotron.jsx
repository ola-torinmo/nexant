import React from 'react';
import arrowd from '../assets/arrowd.png'

export default function Jumbotron(props) {

  
  return (
    <div className='jumbo'>
        
        <img src={props.img} fluid 
        className='image w-full md:h-[400px] h-[200px] '   
        
        />
        <h1 className='md:text-3xl text-lg md:mt-[-20%] mt-[-30%] md:pl-[7%] pl-[12%] text-white' >{props.title}</h1>
        <p className='md:text-base text-xs md:w-[400px] w-[300px] md:pl-[7%] pl-[12%] pt-[1%] text-white'>{props.body}</p>
        <img src={arrowd} alt='' className='ml-[82%] md:mt-[-7%] mt-[-10%] md:w-[70px] md:h-[70px] w-[40px] h-[40px]' />
        
    </div>
  );
  }