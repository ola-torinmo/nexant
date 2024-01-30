import React from 'react'
import dotarrow from '../assets/dottedarrow.png'

function Form (){
  return (
    <>
        <section class=" bg-white  ">
            <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md  ">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Get in Touch</h2>
                    <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">We have available 24/7 to assist, support and resolve issue pertaining to our client.</p>
                    <p className='mt-[50px] font-medium text-center'>Fill the form or <span className='underline underline-offset-4'>send us an email</span></p>
                    <img src={dotarrow} className='md:ml-[35%] ml-[25%] relative z-30' alt="" />
                <form action="#" class="space-y-8 border rounded my-[100px] md:p-[70px] p-[30px] mt-[-50px] shadow-lg shadow-[#C4942D] bg-white relative z-20  ">
                    <div className=' flex'>

                    <div className="p-2 w-1/2">
                        <div className="relative ">
                            <label for="name" className="leading-7 text-sm text-gray-600">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3  leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                    </div>
                    <div className="p-2 w-1/2">
                        <div className="relative">
                            <label
                                for="email"
                                className="leading-7 text-sm text-gray-600"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                    </div>
                    </div>
                    <div className=' flex'>

                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label for="name" className="leading-7 text-sm text-gray-600">
                                    Phone number
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                        </div>
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label
                                    for="email"
                                    className="leading-7 text-sm text-gray-600"
                                >
                                    Subject
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="sm:col-span-2">
                        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                        <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                    </div>
                    <div class="flex items-start">
                        <div class="flex items-center h-5">
                            <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required/>
                        </div>
                        <label for="remember" class="ms-2 md:text-sm text-xs font-medium text-gray-900 dark:text-gray-300">I agree that my information may be used to contact me regarding my inquiry.</label>
                    </div>
                    <div class="flex items-start">
                        <div class="flex items-center h-5">
                            <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required/>
                        </div>
                        <label for="remember" class="ms-2 md:text-sm text-xs font-medium text-gray-900 dark:text-gray-300">I would like to stay informed about the latest technology updates from Edoubleone.</label>
                    </div>
                    <button type="submit" class="py-3   text-sm font-medium  text-white rounded-lg  sm:w-fit md:px-[42.5%] px-[50%] w-[100px]  focus:ring-4 focus:outline-none bg-[#C4942D]"><p className='w-[150px] md:ml-[-20px] ml-[-70px]'>Send message</p></button>
                </form>
        </div>
        </section>
    </>
  )
}

export default Form