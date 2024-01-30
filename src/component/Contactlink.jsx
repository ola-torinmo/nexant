import React from 'react'
import chatpng from '../assets/chat.png'
import chatsvg from '../assets/chat.svg'
import emailpng from '../assets/email.png'
import emailsvg from '../assets/email.svg'
import callpng from '../assets/call.png'
import callsvg from '../assets/call.svg'

function Contactlink  () {
  return (
    <>

        <section className="bg-[#C4942D1A] pt-[400px] mt-[-500px] ">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md flex md:flex-row flex-col md:space-x-12 md:space-y-0 space-y-6 ">
                <div className="max-w-sm p-6 bg-[#C4942D1A] border border-[#C4942D] rounded-lg md:w-[800px] md:h-[260px]">
                    <img src={chatpng} className='w-8 h-8 mb-[10px]' alt="" />
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-[#C4942D]">Chat with us</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-500 text-sm">Contact us via the live chat  with our representative. We are available from Mon to Fri from 9am to 5pm GMT.</p>
                    <a href="#" class="inline-flex items-center text-[#C4942D] hover:underline">
                    Chat with us
                    <img src={chatsvg} className='w-4 h-4 ml-[10px]' alt="" />
                    </a>
                </div>
                <div className="max-w-sm p-6 bg-[#C4942D1A] border border-[#C4942D] rounded-lg  md:w-[800px] md:h-[260px]">
                    <img src={emailpng} className='w-8 h-8 mb-[10px]' alt="" />
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-[#C4942D]">Email us</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-500 text-sm">Simple drop us an email at info@nexantconsult.com and you'll receive a reply within 24 hours</p>
                    <a href="#" class="inline-flex items-center text-[#C4942D] hover:underline">
                    Email us
                    <img src={emailsvg} className='w-4 h-4 ml-[10px]' alt="" />
                    </a>
                </div>
                <div className="max-w-sm p-6 bg-[#C4942D1A] border border-[#C4942D] rounded-lg  md:w-[800px] md:h-[260px]">
                    <img src={callpng} className='w-8 h-8 mb-[10px]' alt="" />
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-[#C4942D]">Give us a call</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-500 text-sm">Give us a ring. Our Experts are standing by Monday to Friday from 9am to 5pm GMT.</p>
                    <a href="#" class="inline-flex items-center text-sm mt-[20px] text-[#C4942D] hover:underline">
                    +234-907-758-7014 
                    <img src={callsvg} className='w-4 h-4 ml-[10px]' alt="" />
                    </a>
                </div>

            </div>
        </section>
      
    
    </>
  )
}


export default Contactlink








