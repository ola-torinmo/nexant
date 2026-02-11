import React from 'react';
import '../App.css';
import logo from "../assets/nexantlogo.png";
import signature from "../assets/signature.png";
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

const QA = () => {
  return (
    <>
      <Navbar />
      
      <div className='flex flex-col md:flex-row md:justify-around md:my-[100px] mt-12'>
        <h1 className='md:text-4xl text-2xl mt-2 text-[#C4942D] text-center md:ml-[4.5%] md:pb-[0%] pb-[10%]'>
          NEXANT CONSULTING LIMITED
        </h1>
        <img
          src={logo}
          className="w-[50%] md:w-[15%] md:ml-[0] ml-[24%] md:pb-[0%] pb-[7%]"
          alt="nexant"
        />
      </div>
      

      <div className='w-[80%] ml-[14%] space-y-6'>
        <h3 className='text-3xl'>
          Quality Policy <br />
        </h3>
        <p>
          Nexant Consulting Limited was incorporated on the 13th of July 2010 as a Construction Management and Engineering Consulting firm to offer Strategic Project Planning, Railway Consultancy Services, Feasibility Studies, Design, Construction Project Supervision and Management, Sustainability Consulting, and Project Scope Definition and Development.
        </p>
        <p>
          Our MISSION is to deliver world-class infrastructure and engineering consultancy services by reinforcing our worldwide corporate alliances and upholding top-tier quality and ethical standards, and our VISION is to globally set a tradition of excellent consultancy services that continually exceed customer expectations. At Nexant, Professionalism, Excellence, Corporate Social Responsibility and Teamwork are the core VALUES we share and have come to relish over time. 
        </p>
        <p>
          Nexant Consulting Limited operates within the context of the following goals, which also define our strategic direction: Enhancement of Customer Satisfaction, Establishment of Organizational Capacity, Achievement of Operational Efficiency, Sustainment of Financial Growth, and Promotion of Corporate Social Responsibility.
        </p>
        <p>
          Our primary commitment is to meet the objectives and requirements of our customers in line with their specifications and as defined in the customers' contracts.
        </p>
        <p>
          Nexant Consulting Limited is committed to the application and maintenance of a Quality Management System that conforms to the requirements of ISO 9001:2015 standard, as well as other statutory requirements relevant to our specific products and services.
        </p>
        <p>
          The Management of Nexant Consulting Limited is committed to continual improvement of the Quality Management System through, among other things:
        </p>
        <ul className='list-disc pl-6 space-y-2'>
          <li>Taking proactive steps to understand and articulate our customers' needs and expectations, as well as those of our other stakeholders;</li>
          <li>Establishing quality objectives that are consistent with our quality policy, measuring the extent of achievement of set quality objectives</li>
          <li>Training of our personnel and encouraging personal and professional development of our staff; ensuring that our external providers key into our Quality Management System for continual provision of products and services that meet our customers' requirements;</li>
          <li>Communicating to the staff the need for continuous implementation of the requirements of the Quality Management System and achieving quality objectives.</li>
        </ul>
        <p>
          <strong>Mr. Toks Akingbade</strong> <br />
          Managing Director
        </p>
        <p>
          This policy is communicated through our website, quality manual, staff inductions, and posting at strategic locations within our business environments. This policy is reviewed every three years or sooner if needed.
        </p>
        <p>
          <strong>Date of Initial approval:</strong> 8th January 2018 <br />
          <strong>Date of Last review and approval:</strong> 28th May, 2025 <br />
          <strong>Date Of Next review:</strong> 28th May, 2028
        </p>
      </div>

      <img
        src={signature}
        className="h-[100px] ml-[14%] my-10"
        alt="signature"
      />

      <Footer />
    </>
  );
};

export default QA;
