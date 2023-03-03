import React from 'react';
import PageFirst from "../PageFirst/PageFirst";
import Fruits from "../../img/header Image.svg"
import Bg from "./../../img/bg elements.svg"
import AboutUs from "../AboutUs/AboutUs";
import FreshVeget from "../FreshVeget/FreshVeget";
import BestChef from "../BestChef/BestChef";
import ForYou from "../ForYou/ForYou";
import Clients from "../Clients/Clients";
import Subscribe from "../Subscribe/Subscribe";

const Home = () => {
    return (
       <>
           <div className="container">
               <div className="flex items-center justify-between ml-24 mb-32">
                   <div className="w-1/2">
                       <h1 className="text-5xl font-medium mb-10 letter-spacing: 0em;">Just <span className="text-green-600 text-5xl font-semibold">Eat healthy</span> food to live a healthier life</h1>
                       <p className="text-l letter-spacing: 2em;">Enjoy a healthy life by eating healthy foods that have extraordinary
                           flavors that make your life healthier for today and in the future
                       </p>
                       <button type="button"
                               className="mt-12 text-white bg-gradient-to-t from-green-700 divide-green-800 to-lime-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-3xl text-sm px-8 py-2.5 text-center mr-2 mb-2">Order Now
                       </button>

                   </div>
                   <div className="header-right">
                       <img src={Fruits} alt="" className='absolute bg-left-top w-5/12'/>
                       <img src={Bg} alt="" className='w-10/12'/>
                   </div>
               </div>
               <PageFirst/>
               <AboutUs/>
               <FreshVeget/>
               <BestChef/>
               <ForYou/>
               <Clients/>
               <Subscribe/>
           </div>

       </>

    );
};

export default Home;