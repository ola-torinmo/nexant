import React,{ useState } from "react";
import logo from "../assets/nexantlogo.png"
import close from "../assets/close.svg"
import hamburgerMenu from "../assets/hamburgerMenu.svg"


const Navbar = ()=>{
    const [toggle,setToggle]=useState(false)
    const handleClick = ()=> setToggle(!toggle)

    return(
        <div className="w-full h-[70px] bg-[#C4942D1A]  ">
            <div className='md:max-w-[1028px] max-w-[600px] m-auto w-full h-full flex justify-between   items-center md:px-0 px-6'>
                    <img src={logo} className="pt-5"/>
                    <div className="hidden md:flex items-center ">
                        <ul className="flex gap-6 pr-[150px]">
                            <li>About us</li>
                            <li>Our services</li>
                            <li>Our projects</li>
                            <li>Our blog</li>
                        </ul>

                        <button className="bg-[#C4942D] text-[#fff] px-6 py-2 rounded-md text-sm">Contact us</button>
                    </div>

                    <div className='md:hidden '  onClick={handleClick}>
                        <img src={toggle?close:hamburgerMenu}  />
                    </div>

            </div>

            <div className={toggle?'absolute z-10 p-4  bg-[#C4942D] text-[white] w-full px-8 md:hidden border-b':'hidden'}>
                <ul className="ml-[90px]">
                        <li className='p-4 hover:bg-gray-100'>About us</li>
                        <li className='p-4 hover:bg-gray-100'>Our services </li>
                        <li className='p-4 hover:bg-gray-100'>Our projects </li>
                        <li className='p-4 hover:bg-gray-100'>Our blog</li>
                        
                </ul>
                <button className="bg-white text-[#C4942D] mt-[30px] ml-[75px] px-12 py-2 rounded-md text-sm">Contact us</button>
            </div>

        </div>
    )
}

export default Navbar;