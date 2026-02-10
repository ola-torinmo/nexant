import React,{ useState } from "react";
import logo from "../assets/nexantlogo.png"
import close from "../assets/close.svg"
import hamburgerMenu from "../assets/hamburgermenu.svg"
import { Link } from 'react-router-dom';


const Navbar = ()=>{
    const [toggle,setToggle]=useState(false)
    const handleClick = ()=> setToggle(!toggle)

    return(
        <div className="w-full h-[70px] bg-[#C4942D1A]">
            <div className='md:max-w-[1028px] max-w-[600px] 2xl:max-w-[1536px] m-auto w-full h-full flex justify-between items-center md:px-0 px-6 ipad-prov:px-[5%] ipad-v:px-[3%]'>
                <Link to="/">
                <img src={logo} className="" alt="nexant" />
                </Link>
                <div className="hidden md:flex items-center">
                <ul className="flex gap-8 2xl:gap-12 pr-[150px] ipad-v:text-[13px] text-[16px]">
                
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/service">Services</Link></li>
                    <li><Link to="/project">Projects</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/qa">Quality Policy</Link></li>
                    {/* <li><Link to="/jobpage">Career</Link></li> */}
                </ul>
                <Link to="/contact">
                    <button className="bg-[#C4942D] text-[#fff] px-6 py-2 rounded-md text-sm">Contact us</button>
                </Link>
                </div>
                <div className='md:hidden' onClick={handleClick}>
                <img src={toggle ? close : hamburgerMenu} />
                </div>
            </div>

            <div className={toggle ? 'absolute z-10 p-4 bg-[#C4942D] text-white w-full px-8 md:hidden border-b' : 'hidden'}>
                <ul className="ml-[37%] text-[16px] ">
                <li className='p-4 hover:text-[#434344] hover:bg-white  text-white'><Link to="/about">About</Link></li>
                <li className='p-4 hover:text-[#434344] text-white'><Link to="/service">Services</Link></li>
                <li className='p-4 hover:text-[#434344] text-white'><Link to="/project">Projects</Link></li>
                <li className='p-4  hover:text-[#434344] text-white'><Link to="/blog">Blog</Link></li>
                <li className='p-4  hover:text-[#434344] text-white ml-[-7%] '><Link to="/qa">Quality Policy</Link></li>
                {/* <li className="p-4  hover:text-[#434344] text-white"><Link to="/jobpage">Career</Link></li> */}
                </ul>
                <Link to="/contact">
                <button className="bg-white text-[#C4942D] mt-[10px] ml-[28%] px-12 py-2 rounded-md text-sm">Contact us</button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar;