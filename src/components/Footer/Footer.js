import React from 'react';

const Footer = () => {
    return (
        <div className="mt-32">

            <footer className="bg-white dark:bg-white">
                <div className="container flex justify-around">
                    <div className="w-3/12 mb-6 md:mb-0">
                        <a href="https://flowbite.com/" className="flex-wrap  items-center">

                            <span
                                className="self-center  text-2xl font-semibold whitespace-nowrap dark:text-black">UI.desk</span>
                            <p className="mt-10 text-gray-600 dark:text-gray-500">On formed merits hunted unable merely by mr whence or. </p>
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-black">Home</h2>
                            <ul className="text-gray-600 dark:text-gray-500">
                                <li className="mb-4">
                                    <a href="https://flowbite.com/" className="hover:underline">Company</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://tailwindcss.com/" className="hover:underline">News</a>
                                </li>
                                <li>
                                    <a href="https://tailwindcss.com/" className="hover:underline">Team</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-black">About</h2>
                            <ul className="text-gray-600 dark:text-gray-500">
                                <li className="mb-4">
                                    <a href="https://github.com/themesberg/flowbite"
                                       className="hover:underline ">History</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Service</a>
                                </li>
                                <li>
                                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Pricing</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-black">Partner</h2>
                            <ul className="text-gray-600 dark:text-gray-500">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Business</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Plan</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Marketing</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-black">Contact</h2>
                            <ul className="text-gray-600 dark:text-gray-500">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">UI.desk</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">(465)954-8487</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Lahore, Pakistan</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='bg-gradient-to-t from-green-700 divide-green-800 to-lime-600 mt-32'>
                    <hr className="my-6 bg-green-200 sm:mx-auto bg-green-200 lg:my-8"/>
                    <div className=" text-center sm:flex sm:items-baseline sm:justify-center">
        <span className="mb-4 text-sm text-white  sm:text-center text-white-100 ">© Copyright 2020 <a href="#"
                                                                                                    className="hover:underline">by ui.desk.</a> All rights reserved.
        </span>
                    </div>
                </div>

            </footer>

        </div>
    );
};

export default Footer;