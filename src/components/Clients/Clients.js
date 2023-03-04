import React from 'react';
import Khalil from './../../img/avatar.svg'
import Zeeshan from './../../img/avatar (1).svg'
import icon from './../../img/_.svg'
import {BsArrowLeft, BsArrowRight} from "react-icons/bs";

const Clients = () => {
    return (
        <div className="flex-wrap mb-32 mt-32">
            <h1 className="items-center mb-12 text-center text-4xl font-semibold">Happy Clients Says</h1>
            <div className='flex justify-center'>
                <div className="w-2/5 p-8 ml-8 bg-white border-white-100 rounded-xl shadow dark:bg-white-100 dark:border-white-200">
                    <div className='flex justify-start mb-8'>
                        <img src={Khalil} alt="" className='w-20'/>
                        <div className='ml-8 flex-wrap'>
                            <h2 className="font-semibold text-xl">KHALIL NAZIR</h2>
                            <h4>CEO of UI.Desk</h4>
                        </div>
                        <img src={icon} alt="" className="ml-12"/>
                    </div>
                    <p className='text-l'>Thirty for remove plenty regard you summer though.
                        He preference Partiality on or continuing in
                        particular principles as. Do believing oh
                        disposing to supported allowance we.</p>
                </div>
                <div className="w-2/5 p-8 ml-8 bg-white border-white-100 rounded-xl shadow dark:bg-white-100 dark:border-white-200">
                    <div className='flex justify-start mb-8'>
                        <img src={Zeeshan} alt="" className='w-20'/>
                        <div className='ml-8 flex-wrap'>
                            <h2 className="font-semibold text-xl">ZEESHAN ANWER</h2>
                            <h4>CEO of UI Box</h4>
                        </div>
                        <img src={icon} alt="" className="ml-12"/>
                    </div>
                    <p className='text-l'>Really boy law county she unable her sister.
                        Feet you off its like like six. Among sex are
                        leave law built now. In built table in an rapid blush.
                        Merits behind on afraid or warmly.
                    </p>
                </div>

            </div>
            <div className='flex justify-center mt-20'>
                <BsArrowLeft color={"gray"} fontSize={45}/>
                <BsArrowRight color={"green"} fontSize={45}/>

            </div>

        </div>
    );
};

export default Clients;