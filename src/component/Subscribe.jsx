import React from 'react'
import sub from '../assets/sub.png'

function Subscribe ()  {
  return (
    <div className='w-full'>
         <img src={sub}  
        className='w-full md:h-[200px] h-[160px] mt-[-200px] mb-[50px] '/>
          <div className="text-center md:mt-[-200px] mt-[-180px] mb-[50px]">
                        <h1 className="font-normal text-white md:text-3xl text-lg text-grey-800 font-normal leading-loose my-3 w-full">Don’t want to miss anything?</h1>
                        <p className="font-normal text-white md:text-xs text-[11px] text-grey-800 font-light leading-loose mt-[-20px] w-full py-2">Get weekly updates on our latest stories...</p>
                        <div className="w-full text-center">
                            <form action="#">
                                <div className="max-w-sm mx-auto p-1 pr-0 flex items-center">
                                    <input type="email" placeholder="yourmail@example.com"
                                        className="flex-1 appearance-none rounded shadow py-2 md:px-12 px-10 text-grey-dark mr-2  focus:outline-none border border-[#FDD575] bg-transparent"/>
                                    <button type="submit"
                                        className="bg-[#C4942D] text-white text-base font-semibold rounded-md shadow-md hover:bg-indigo-600 py-2 md:px-6 px-5">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
        
    </div>
  )
}


export default Subscribe