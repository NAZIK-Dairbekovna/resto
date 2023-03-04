import React from 'react';
import {NavLink} from "react-router-dom";
import {CiSearch} from "react-icons/ci";
import {BsCart3} from "react-icons/bs";

const Header = () => {
    return (
        <div>
            <nav className="bg-white border-gray-200 px-2 sm:px-4 py-8 rounded dark: w-full">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <a href="#" className="flex items-center">
                        <span
                            className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">UI.desk</span>
                    </a>
                    <div className="flex justify-around md:order-2">
                        <div className='flex items-center mr-8'>
                            <CiSearch className='mr-4 accent-gray-900' fontSize={20}/>
                            <BsCart3 className='text-gray-900' fontSize={20}/>
                        </div>
                        <button type="button"
                                className="text-white bg-gray-900 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-800 font-medium rounded-3xl text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-gray-700 dark:hover:bg-gray-500 dark:focus:ring-gray-400">Order Now
                        </button>
                        <button data-collapse-toggle="navbar-cta" type="button"
                                className="inline-flex items-center p-2 text-sm text-gray-500 px-8 md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                aria-controls="navbar-cta" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                      clipRule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                         id="navbar-cta">
                        <NavLink to={'/'} className="block py-2 text-l font-normal pl-3 mx-8 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-green-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-green-500 md:dark:hover:bg-transparent dark:border-gray-700">Home</NavLink>
                        <NavLink to={'/About'} className="block py-2 text-l font-normal pl-3 mx-8 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-green-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</NavLink>
                        <NavLink to={'/Contact'} className="block py-2 text-l font-normal pl-3 mx-8 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-green-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</NavLink>
                        <NavLink to={'/Testimonials'} className="block py-2 text-l font-normal pl-3 mx-8 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-green-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Testimonials</NavLink>

                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Header;