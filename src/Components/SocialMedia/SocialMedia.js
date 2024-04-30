import React from "react";
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

export const SocialMedia = () =>{
    return(
        <>
        <div className="socialMedai text-orange-500 flex gap-5 items-center justify-center py-6 text-4xl ">
       
       <p><Link to="" ><FaFacebookSquare /></Link></p>
       <p><Link to="" ><FaLinkedin /></Link></p>
       <p><Link to="" ><FaInstagramSquare /></Link></p>

        
       

      </div>
        </>
    )
}