import React from "react";
import logo from '../../assets/images/logo.png'
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { SocialMedia } from "../SocialMedia/SocialMedia";

export const Footer = () =>{
    return(
        <>
          <div className="container flex justify-center mx-auto px-8 text-center items-center py-10">
        <div>
        <img className="h-[100px] m-auto" src={logo} alt="" />
            <p className="text-center text-lg  text-gray-600 py-3">
          We don't care if we're doing haute cuisine or burgers and pizza.
          We just do it right. Always.</p>
          <SocialMedia/>

        </div>
          </div>
          
          <div className="bottombar text-center py-3 border-t-2">
            <div className="container text-gray-600">
            TingleTaste © 2024. All Rights Reserved.2024
            </div>
          </div>

        </>

    )
}