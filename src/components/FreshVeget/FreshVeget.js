import React from 'react';
import tacos from './../../img/image.svg'
const FreshVeget = () => {
    return (
        <div className="flex items-center justify-between ml-14 mr-0 mt-0 mb-32">
            <div className='w-1/2 ml-5'>
                <img src={tacos} alt=""/>
            </div>
            <div className='w-1/3 mr-20'>
                <h1 className="items-center mb-4 text-4xl font-semibold">Fresh Vegetables
                    Every Day</h1>
                <p>Healthy life as informed declared we enjoy the margaret.
                    Joy horrible moreover man feelings own shy. Request
                    norland neither mistake for yet. Between the for morning
                    assured country believe.
                </p>
                <button type="button"
                        className="mt-12 text-white bg-gradient-to-t from-green-700 divide-green-800 to-lime-600 hover:bg-gradient-to-br focus:ring-4
                          focus:outline-none focus:ring-green-300 dark:focus:ring-green-400
                           shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80
                           font-medium rounded-3xl text-sm px-8 py-2.5 text-center mr-2 mb-2">
                   Learn More
                </button>
            </div>
        </div>
    );
};

export default FreshVeget;