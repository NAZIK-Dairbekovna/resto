import React from 'react';

const Subscribe = () => {
    return (
        <div className="flex-wrap mb-64">
            <div className='flex-wrap text-center mb-16'>
                <h1 className="items-center mb-6 text-4xl font-semibold">Subscribe to the Newsletter</h1>
                <h3 className='text-2xl'>Enter your email below to get our daily offers and news</h3>
            </div>

            <div className='flex justify-center'>
                <input type="text" id="disabled-input" aria-label="disabled input"
                       className="mb-0 mr-4 bg-gray-100 border border-white-300 text-gray-900 text-sm rounded-full
                   focus:ring-white-500 focus:border-white-500 block w-1/4 p-2.5 cursor-not-allowed
                   dark:bg-white-700 dark:border-white-600 dark:placeholder-gray-400 dark:text-gray-400
                    dark:focus:ring-white-500 dark:focus:border-blue-500"
                       value="Enter your email." disabled/>
                <button type="button"
                        className="mt-0 text-white bg-gradient-to-t from-green-700 divide-green-800 to-lime-600 hover:bg-gradient-to-br focus:ring-4
                          focus:outline-none focus:ring-green-300 dark:focus:ring-green-400
                           shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80
                           font-medium rounded-3xl text-sm px-10 py-3.5 text-center mr-2 mb-2">
                    Get Started
                </button>
            </div>


        </div>
    );
};

export default Subscribe;