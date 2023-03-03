import React from 'react';
import GreenSalad from './../../img/image (1).svg';
import BeefSalad from './../../img/image (2).svg';
import NutSalad from './../../img/image (3).svg';

const ForYou = () => {
    return (
        <div className="flex-wrap mb-32">
            <div className='text-center mb-16'>
                <h1 className="items-center mb-4 text-4xl font-semibold">Special Dishes for you</h1>
                <p className="mb-12 ">Made with premium & 100% Organic ingredients</p>
            </div>
            <div className='flex justify-between '>
                <div className="text-center w-1/3 p-16 ml-8 bg-white border border-white-200 rounded-3xl shadow dark:bg-white-400 dark:border-white-700">
                    <img src={GreenSalad} alt="" className='mb-8'/>
                    <h2 className="font-semibold text-xl"> Green Salad</h2>
                    <p>A salad combined witha delicious
                        cut of bacon and mixed with tasty
                        and fresh sesome oil.</p>
                </div>
                <div className="text-center w-1/3 p-16 ml-8 bg-white border border-white-200 rounded-3xl shadow dark:bg-white-400 dark:border-white-700">
                    <img src={BeefSalad} alt="" className='mb-8'/>
                    <h2 className="font-semibold text-xl"> Beef Salad</h2>
                    <p>A salad combined witha delicious
                        cut of bacon and mixed with tasty
                        and fresh sesome oil.</p>
                </div>
                <div className="text-center w-1/3 p-16 ml-8 bg-white border border-white-200 rounded-3xl shadow dark:bg-white-400 dark:border-white-700">
                    <img src={NutSalad} alt="" className='mb-8'/>
                    <h2 className="font-semibold text-xl">Nut Salad</h2>
                    <p>A salad combined witha delicious
                        cut of bacon and mixed with tasty
                        and fresh sesome oil.</p>
                </div>
            </div>
            <div className='text-center'>
                <button type="button"
                        className="text-center mt-12 text-white bg-gradient-to-t from-green-700 divide-green-800 to-lime-600 hover:bg-gradient-to-br focus:ring-4
                          focus:outline-none focus:ring-green-300 dark:focus:ring-green-400
                           shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80
                           font-medium rounded-3xl text-sm px-10 py-2.5 text-center mr-2 mb-2">
                    View All
                </button>
            </div>
        </div>
    );
};

export default ForYou;