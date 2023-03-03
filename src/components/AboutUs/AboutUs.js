import React from 'react';
import coconut from './../../img/Image 01.svg'
import kale from './../../img/Image 02.svg'
import spinach from './../../img/Image 03.svg'

const AboutUs = () => {
    return (
        <div className="flex items-center justify-between ml-14 mt-0 mb-32">
            <div className='w-2/6 ml-16'>
                <h1 className="items-center mb-4 text-4xl font-semibold" >About US</h1>
                <p>Organic food is grown without the use of synthetic chemicals,
                    such as human-made pesticides and fertilizers, and does not
                    contain genetically modified organisms (GMOs). Organic foods
                    include fresh produce, meats, and dairy products as well as
                    processed foods such as crackers, drinks, and frozen meals.
                </p>
                <button type="button"
                        className="mt-12 text-white bg-gradient-to-t from-green-700 divide-green-800 to-lime-600 hover:bg-gradient-to-br focus:ring-4
                          focus:outline-none focus:ring-green-300 dark:focus:ring-green-800
                           shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80
                           font-medium rounded-3xl text-sm px-8 py-2.5 text-center mr-2 mb-2">
                    Learn More
                </button>
            </div>
            <div className='w-1/2 flex justify-between'>
                <div className="mr-5">
                    <img src={coconut} alt="" className=" mb-5"/>
                    <img src={kale} alt="" />
                </div>
                <img src={spinach} alt="" className="w-1/2 mt-14"/>
            </div>
        </div>
    );
};

export default AboutUs;