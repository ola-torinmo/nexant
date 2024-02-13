import React from 'react';
import arrowd from '../assets/arrowd.png'

export default function Jumbotron(props) {

  
  return (
    <div className='jumbo'>
        
        <img src={props.img} fluid 
        className='image w-full md:h-[350px] h-[200px] '   
        
        />
        <h1 className='2xl:text-5xl md:text-3xl text-lg 2xl:mt-[-12%] md:mt-[-20%] mt-[-30%] md:pl-[7%] pl-[12%] text-white' >{props.title}</h1>
        <p className='2xl:text-lg md:text-base text-xs 2xl:w-[500px] md:w-[400px] w-[300px] md:pl-[7%] pl-[12%] pt-[1%] text-white'>{props.body}</p>
        <img src={arrowd} alt='' className='ml-[82%] 2xl:mt-[-5%] md:mt-[-7%] mt-[-10%] md:w-[70px] md:h-[70px] w-[40px] h-[40px]' />
        
    </div>
  );
  }