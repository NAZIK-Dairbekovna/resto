import React from 'react';
import iconOrder from './../../img/Icon.svg'
import iconMap from './../../img/Icon (1).svg'
import iconList from './../../img/leaf 1.svg'

const PageFirst = () => {
    return (
        <div className="flex-wrap mb-32">
            <div className='text-center'>
                <h1 className="items-center mb-4 text-4xl font-semibold">Why Choose US?</h1>
                <p className="mb-16 ">Organic food is grown without the use of synthetic chemicals</p>
            </div>
            <div className="flex justify-around mb-16">
                <div className="w-1/5 text-center">
                    <img src={iconOrder} alt="" className='ml-16 mb-10'/>
                    <h2 className="font-semibold text-xl">Easy to order</h2>
                    <p>foods include fresh produce, meats as well as processed</p>
                </div>
                <div className="w-1/5 text-center">
                    <img src={iconMap} alt="" className='ml-16 mb-10'/>
                    <h2 className="font-semibold text-xl">Live Order</h2>
                    <p>Place your online Order easily and get the food instantly</p>
                </div>
                <div className="w-1/5 text-center">
                    <img src={iconList} alt="" className='ml-16 mb-10'/>
                    <h2 className="font-semibold text-xl">100% Organic</h2>
                    <p>Organic food is grown without the use of synthetic chemicals</p>
                </div>
            </div>
            <div className="flex justify-center mb-32">
                <div className='text-center mr-20'>
                    <h1 className="font-semibold text-4xl">40+</h1>
                    <p>Food Partners</p>
                </div>
                <div className='text-center mr-20'>
                    <h1 className="font-semibold text-3xl">459+</h1>
                    <p>Trusted Clients</p>
                </div>
                <div className='text-center'>
                    <h1 className="font-semibold text-3xl">12k+</h1>
                    <p>Order Online</p>
                </div>
            </div>
        </div>
    );
};

export default PageFirst;