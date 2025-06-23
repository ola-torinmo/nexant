import React from 'react'
import '../App.css'
import logo from "../assets/nexantlogo.png"
import signature from "../assets/signature.png"
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

const QA = () => {
  return (
    <>
    <Navbar/>
    <div className='flex flex-col md:flex-row md:justify-around md:my-[100px] mt-12'>
        <h1 className='md:text-4xl text-2xl mt-2 text-center md:ml-[-4.5%] md:pb-[0%] pb-[10%] '>Quality Policy</h1>
        <img src={logo} className=" w-[50%] md:w-[15%] md:ml-[0] ml-[24%] md:pb-[0%] pb-[7%] " alt="nexant" />
    </div>
    <div className=' w-[80%] ml-[14%]  '>
    <p className='md:pb-[4%] pb-[10%]'>We are looking for a proactive and technically skilled Digital Operations & IT Support Specialist to manage key aspects of our IT infrastructure, website performance, and social media presence. This role combines technical troubleshooting with content execution and digital brand maintenance, making it ideal for someone who thrives at the intersection of tech and marketing. </p>
    <p className='md:pb-[4%] pb-[10%]'>
 Key Responsibilities:
</p>
    <p className='md:pb-[4%] pb-[10%]'>• IT Support
</p>
    <p className='md:pb-[4%] pb-[10%]'> Provide technical support for hardware, software, and cloud systems (Google Workspace, Zoom, Microsoft 365, etc.)
</p>
    <p className='md:pb-[4%] pb-[10%]'> Troubleshoot and resolve email setup, password issues, and internet/network glitches </p>
    <p className='md:pb-[4%] pb-[10%]'> Maintain and update basic internal tech documentation
 </p>
    <p className='md:pb-[4%] pb-[10%]'> Coordinate with third-party IT vendors when needed</p>
    <p className='md:pb-[4%] pb-[10%]'>

     • Website Updates

    </p>
    <p className='md:pb-[4%] pb-[10%]'> Regularly update website content (text, images, blog posts, banners, team bios)

    </p>
    <p className='md:pb-[4%] pb-[10%]'> Implement minor design/layout edits using CMS tools (e.g., WordPress, Webflow, Wix)</p>
    <p className='md:pb-[4%] pb-[10%]'> Ensure mobile responsiveness and optimize site performance</p>
    <p className='md:pb-[4%] pb-[10%]'> Manage plugin updates, basic SEO checks, and uptime monitoring
</p>
    <p className='md:pb-[4%] pb-[10%]'>• Social Media Page Updates
s</p>
    <p className='md:pb-[4%] pb-[10%]'> Publish scheduled content to Instagram, Facebook, LinkedIn, or TikTok platforms
</p>
    <p className='md:pb-[4%] pb-[10%]'> Update profile bios, pinned content, and highlight new campaigns or services</p>
    <p className='md:pb-[4%] pb-[10%]'>Monitor inboxes/messages and flag any inquiries to the relevant team member
</p>
    <p className='md:pb-[4%] pb-[10%]'> Track engagement or flag platform changes that may affect reach</p>
    </div>
    <img src={signature} className="h-[100px] ml-[14%] my-10" alt="signature" />
    <Footer/>

    </>
  )
}

export default QA