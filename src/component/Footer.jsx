import React from 'react'
import logo from "../assets/nexantlogo.png"
import arrow from '../assets/arrow.svg'
import { Link } from 'react-router-dom';
// import icon1 from '../assets/icon1.png'
// import icon2 from '../assets/icon2.svg'
// import icon3 from '../assets/icon3.svg'
// import icon4 from '../assets/icon4.svg'

const Footer = () => {
  return (
   <>

   <section className='flex mx-auto w-full'>
   <aside className="p-4 bg-[#C4942D] md:w-[60%] w-[60%] " >
        <div className=" mx-auto flex   place-items-center  text-center justify-center md:pl-[200px]">
        
                
                 <span className="md:text-sm text-[9px] text-white text-center flex w-[287px]  md:ml-[-200px] md:mr-[00px] ">Get connected with us on social networks  
                 <svg className="md:w-5 w-4 md:h-5 h-4 ml-[10px]" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>    
                       
                 </span>
                        

                
               
                
        </div>

       
    </aside>
    <aside className="p-4 bg-[#4A3C34] md:w-[40%] w-[40%] " >
        <div className=" mx-auto flex   place-items-center  text-center justify-center md:pl-[200px] ">
        
                        
                

                <div className="flex  md:space-x-6 space-x-4 justify-end md:pr-[113.5px] pr-[14px] ipad-prov:ml-[-80px] ipad-v:ml-[-140px] ipad-h:ml-[-45%] ">   
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                        <svg className="md:w-5 w-4 md:h-5 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/></svg>
                        
                    </a>
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                        <svg className="md:w-5 w-4 md:h-5 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                        <svg className="md:w-5 w-4 md:h-5 h-4" fill="currentColor"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
                        
                    </a>
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                        <svg className="md:w-5 w-4 md:h-5 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/></svg>
                    </a>
                </div>

                
               
                
        </div>

       
    </aside>
   </section>

  
    <footer className="p-4 bg-[#434344] text-white ">
        <div className="mx-auto max-w-screen-xl px-[6%] ">
        
            <div className="md:flex md:justify-between md:pt-[50px] pt-[20px] 2xl:mx-[-200px] ipad-prov:mx-[-15px] ipad-v:mx-[-25px]  md:px-[50px] px-[20px]  ">
                {/* <div className='md:w-[120px] w-[80px] md:h-[100px] h-[60px] bg-[#C4942D] md:pl-[10px] pl-[115px] 2xl:ml-[-300px] xl:ml-[-15px] -skew-y-12 rounded-r -translate-x-[5rem] md:mt-[50px] opacity-50'>

                </div> */}
                
                <div className="mb-6 md:mb-0 md:pr-[200px] ipad-v:pr-[50px] md:ml-[-70px]">
                <Link to="/">
                <a className="flex items-center pb-10">
                    <img src={logo} className="mr-3" alt="Nexant Logo" />
                </a>
                </Link>
                    <p className='w-[300px] text-[14px] text-white'>
                    We don’t just build structures; we craft legacies. With a steadfast commitment to precision, we turn blueprints into living, breathing spaces that send as a testament to our dedication.
                    </p>

                    <form className=' pt-[50px]'>   
                        <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
                        <div className="relative">
                            <input type="search" id="search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-[#FDD575] rounded-lg bg-[#C4942D1A] focus:ring-blue-500 focus:border-blue-500 md:mr-[300px]" placeholder="name@gmail.com" required/>
                            <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-[#C4942D]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2  "><img src={arrow}  /></button>
                        </div>
                        <p id="helper-text-explanation" className="mt-2 text-sm text-white pt-6">Subscribe to our news letter </p>
                    </form>
                </div>
                <div className="grid grid-cols-1 gap-8 sm:gap-6 md:grid-cols-3 text-[14px]">
                    <div>
                        <h2 className="md:mb-[70px] mb-[20px] text-sm font-semibold text-gray-900 uppercase text-white">Company</h2>
                        <ul className="text-white">
                            <li className="mb-4 text-white">
                                <Link to="/">
                                <a href="" className="hover:underline">Home</a>
                                </Link>
                            </li>
                            <li className="mb-4 text-white" >
                                <a href="#" className="hover:underline">About Us</a>
                            </li>
                            <li className="text-white">
                                <a href="#" className="hover:underline">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="md:mb-[70px] mb-[20px] text-sm font-semibold text-gray-900 uppercase text-white">Alternatives</h2>
                        <ul className="text-white">
                            <li className="mb-4 text-white">
                                <a href="#" className="hover:underline ">Oil & Gas</a>
                            </li>
                            <li className="mb-4 text-white">
                                <a href="#" className="hover:underline">Road projects</a>
                            </li>
                            <li className="mb-4 text-white">
                                <a href="#" className="hover:underline ">Railway projects</a>
                            </li>
                            <li className="mb-4 text-white">
                                <a href="#" className="hover:underline ">Building projects</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="md:mb-[70px] mb-[20px] text-sm font-semibold text-gray-900 uppercase text-white">Contact Us</h2>
                        <ul className="text-white">
                            <li className="mb-4 text-white">
                                <a href="#" className="hover:underline">Email: info@nexantconsult.com</a>
                            </li>
                            <li className="mb-4 text-white">
                                <a href="#" className="hover:underline">Website: www.nexantconsult.com</a>
                            </li>
                            <li className="mb-4 text-white">
                                <a href="#" className="hover:underline">Telephone: 01-2956505+234-907-758-7014</a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* <div className='md:w-[120px] w-[80px] md:h-[100px] h-[60px] bg-[#929292]  md:mt-[100px]  -skew-y-12 rounded-l md:translate-x-[4.1rem] translate-x-[3%] md:ml-[0%] ml-[85%] md:pl-[0] pl-[25%] 2xl:mr-[-304px]  ipad-pro:mr-[-28px]  opacity-50 overflow-hidden '>
                </div> */}
            </div>

        
           
            
        </div>
       
    
    </footer>
    <section className="p-4 bg-[#4A3C34]" >
        <div className=" mx-auto max-w-screen-xl place-items-center  text-center justify-center ">
                <span className="md:text-sm text-xs text-white text-center ">Copyright @ 2023:  
                <a href="#" className="hover:underline text-[#C4942D]">    www.nexantconsult.com</a>. All Rights Reserved.
                </span>
                
        </div>

    </section>

   </>
  )
}


export default Footer