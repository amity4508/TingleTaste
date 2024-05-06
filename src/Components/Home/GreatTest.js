import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import img1 from '../../assets/images/asset 17.jpeg'
import { ProgressBar, progressData } from '../Progressbar/progressbar';

export const GreatTest = () =>{
    return(
        <>
        <div className="container mx-auto timing px-8 sm:px-2   mt-20 py-10 ">
            <div className="flex max-sm:flex-col  sm:flex-row ">
                <div className="left sm:w-full max-sm:w-full  md:w-2/3 flex max-sm:flex-col max-sm:text-center items-center gap-5">
                     <div className="">
                        <img className="h-[300px] rounded w-[360px]" src={img1} alt="" />
                     </div>
                     <div>
                        <h1 className="text-gray-600 text-lg font-xl font-semibold" >Explosion of great taste</h1>
                        <p className="text-gray-700 font-semibold py-5 text-3xl ">MEGA FISH BURGER DELUXE</p>
                        {/* progress bar     */}

                        <div className="p-4">
                            <ProgressBar progressData={progressData} />
                            </div>
                     </div>
                </div>
                <div className="right max-sm:text-center md:w-1/3 sm:w-full max-sm:w-full max-sm:mt-10">
               <div>
               <p className="text-lg text-gray-500">Tincidunt integer eu augue augue nunc elit dolor, luctus placerat scelerisque euismod, iaculis eu lacus nunc mi elit, vehicula ut laoreet ac, aliquam sit amet justo nunc tempor, metus vel. Tincidunt integer eu augue augue nunc elit dolor luctus placerat scelerisque euismod, iaculis eu lacus nunc mi elite sartonetro permo.</p>
                   <h1 className="text-3xl ma mt-5 text-gray-700 font-semibold" >$ 7.75</h1>
                 
                   
               </div>
                </div>
            </div>
        </div>
        </>
    )
}


