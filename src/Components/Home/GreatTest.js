import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import img1 from '../../assets/images/asset 17.jpeg'
import { ProgressBar, progressData } from '../Progressbar/progressbar';

export const GreatTest = () =>{
    return(
        <>
        <div className="container mx-auto timing px-8 sm:px-2   mt-16 py-10 ">
            <div className="flex max-sm:flex-col  sm:flex-row  gap-10">
                <div className="left sm:w-full max-sm:w-full  md:w-2/3 flex max-sm:flex-col max-sm:text-center items-center gap-5">
                     <div className="">
                        <img className="h-[300px] rounded w-[360px]" src={img1} alt="" />
                     </div>
                     <div>
                        <h1 className="text-gray-600 text-lg font-xl font-semibold" >Explosion of great taste</h1>
                        <p className="text-gray-700 font-semibold py-5 text-3xl uppercase ">MEGA Cheese burger : DELUXE</p>
                        {/* progress bar     */}

                        <div className="p-4">
                            <ProgressBar progressData={progressData} />
                            </div>
                     </div>
                </div>
                <div className="right max-sm:text-center md:w-1/3 sm:w-full max-sm:w-full max-sm:mt-10">
               <div>
               <p className="text-lg text-gray-500 mt-3">Burgers are a popular fast food item such as a cooked patty of beans, lentils, or vegetables, served in a sliced bread roll referred to as a bun. The available types of burgers based totally on their fillings are:</p>
                   <h1 className="text-3xl ma mt-5 text-gray-700 font-semibold" >$ 1.75</h1>
                 
                   
               </div>
                </div>
            </div>
        </div>
        </>
    )
}


