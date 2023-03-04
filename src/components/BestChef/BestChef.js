import React from 'react';
import check from './../../img/check mark.svg'
import Chefs from './../../img/Image & bg elements.svg'

const BestChef = () => {
    return (
        <div className="flex items-center justify-between ml-14 mr-0 mt-0 mb-32">
            <div className='w-1/3'>
                <h1 className="items-center mb-4 text-5xl font-medium mb-8">Cooked by the
                    Best Chefs
                </h1>
                <p className='mb-8'>Believing neglected so so allowance existence departure in.
                    In design active temper be uneasy. Thirty for remove plenty
                    regard you summer though. He preference connection astonished on of ye.
                </p>
                <div className='flex justify-start mb-4'>
                    <img src={check} alt=""/>
                    <p className='ml-2'>A guaranteed delicious meal</p>
                </div>
                <div className='flex justify-start mb-4'>
                    <img src={check} alt=""/>
                    <p className='ml-2'>Food is guaranteed hygienic</p>
                </div>
                <div className='flex justify-start'>
                    <img src={check} alt=""/>
                    <p className='ml-2'>Cooked quickly</p>
                </div>
            </div>
            <div>
                <img src={Chefs} alt="" className='w-70'/>
            </div>
        </div>
    );
};

export default BestChef;