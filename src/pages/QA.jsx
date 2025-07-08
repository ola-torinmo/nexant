import React from 'react';
import '../App.css';
import logo from "../assets/nexantlogo.png";
import signature from "../assets/signature.png";
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

const QA = () => {
  return (
    <>
    <Navbar/>
    <div className='flex flex-col md:flex-row md:justify-around md:my-[100px] mt-12'>
        <h1 className='md:text-4xl text-2xl mt-2 text-center md:ml-[-4.5%] md:pb-[0%] pb-[10%] '>Quality Policy</h1>
        <img src={logo} className=" w-[50%] md:w-[15%] md:ml-[0] ml-[24%] md:pb-[0%] pb-[7%] " alt="nexant" />
    </div>
    <div className=' w-[80%] ml-[14%]  '>
    <p className='md:pb-[4%] pb-[10%]'>NEXANT CONSULTING LIMITED Quality Policy Nexant Consulting Limited was incorporated on the 13th of July 2010 as a Construction Management and Engineering Consulting firm to offer Strategic Project Planning, Feasibility Studies, Design, Construction Project Supervision and Management, Sustainability Consulting, and Project-Scope Definition and Development. </p>
    <p className='md:pb-[4%] pb-[10%]'>Our MISSION is to deliver world class infrastructure and engineering consultancy services by reinforcing our worldwide corporate alliances and upholding top-tier quality and ethical standards, and our VISION is to globally set a tradition of excellent consultancy services that continually exceeds customer expectations. At Nexant, Professionalism, Excellence, Corporate Social Responsibility and Teamwork are the core VALUES we share and have come to relish over time.</p>
    <p className='md:pb-[4%] pb-[10%]'>Nexant Consulting Limited operates within the context of the following goals which also define our strategic direction: Enhancement of Customer Satisfaction, Establishment of Organizational Capacity, Achievement of Operational Efficiency, Sustainment of Financial Growth, and Promotion of Corporate Social Responsibility.</p>
    <p className='md:pb-[4%] pb-[10%]'>Our primary commitment is to meet the objectives and requirements of our customers in line with their specifications and as defined in the customers' contracts.</p>
    <p className='md:pb-[4%] pb-[10%]'>Nexant Consulting Limited is committed to the application and maintenance of a Quality Management System that conforms to the requirements of ISO 9001:2015 standard, as well as other statutory requirements relevant to our specific products and services. </p>
    <p className='md:pb-[4%] pb-[10%]'>The Management of Nexant Consulting Limited is committed to continual improvement of the Quality Management System through, among other things: </p>
    <p className='md:pb-[4%] pb-[10%]'>• Taking proactive steps to understand and articulate our customers' needs and expectations, as well as those of our other stakeholders;</p>
    <p className='md:pb-[4%] pb-[10%]'>

    • Establishing quality objectives that are consistent with our quality policy, measuring the extent of achievement of set quality objectives and carrying out regular management reviews for consistency and improvement of our capacity to always meet set quality objectives;

    </p>
    <p className='md:pb-[4%] pb-[10%]'>• Training of our personnel and encouraging personal and professional development of our staff; Ensuring that our external providers key into our Quality Management System for continual provision of products and services that meet our customers' requirements;
    </p>
    <p className='md:pb-[4%] pb-[10%]'>• Communicating to the staff the need for continuous implementation of the requirements of the Quality Management System and achieving quality objectives</p>
    </div>
    <img src={signature} className="h-[100px] ml-[14%] my-10" alt="signature" />
    <Footer/>

    </>
  );
};

export default QA;
