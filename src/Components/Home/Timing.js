import React from "react";
import { CiClock2 } from "react-icons/ci";
import { Link } from "react-router-dom";

export const Timing = () =>{
    return(
        <>
        <div className="container mx-auto timing px-8 sm:px-2   mt-10 py-10 ">
            <div className="flex max-sm:flex-col  sm:flex-row ">
                <div className="left sm:w-full max-sm:w-full  md:w-2/3 flex max-sm:flex-col max-sm:text-center items-center gap-5">
                     <div className="icon"><CiClock2 className="text-gray-400 text-6xl " /></div>
                     <div>
                        <h1 className="text-gray-600 text-lg font-xl font-semibold" >From Monday to Friday</h1>
                        <p className="text-gray-600 text-base ">From 11am to 15pm and from 7pm to 11pm. <br />Friday afternoon closed.</p>
                        <div className="mt-5">
                        <h1 className="text-gray-600 text-lg font-xl font-semibold" >From Monday to Friday</h1>
                        <p className="text-gray-600 text-base ">From 11am to 15pm and from 7pm to 11pm. <br />Friday afternoon closed.</p>
                        </div>
                     </div>
                </div>
                <div className="right max-sm:text-center md:w-1/3 sm:w-full max-sm:w-full max-sm:mt-10">
               <div>
               <p className="text-xl">Instant reservetion available</p>
                   <h1 className="text-4xl ma mt-5 text-gray-700 font-semibold" >BOOK A TABLE</h1>
                   <div className="mt-6">
                   <Link to='/#' className ='text-gray-600 border p-2 text-lg hover:bg-orange-500 hover:text-white'>Menu</Link>
                   </div>
               </div>
                </div>
            </div>
        </div>
        </>
    )
}