import React, { useState } from 'react';
import { motion } from 'framer-motion';
import logo from '../../assets/images/New folder/asset 3.png'
import logo2 from '../../assets/images/logo.png'
import { Link } from 'react-router-dom';
import { SocialMedia } from '../SocialMedia/SocialMedia';


 export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white  py-3 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex w-1/2">
            <div className="flex-shrink-0 flex items-center">
                <img className='h-[70px] w-[200px]' src={logo2} alt="" />

            </div>
          </div>
          <div className="flex w-1/2 flex-row gap-4 max-sm:hidden justify-items-end text-xl font-medium ">
          <Link><p>Home</p></Link>
            <Link><p>Menu</p></Link>
          </div>
          <div>
          <SocialMedia/>

          </div>
       
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleSidebar}
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 transition duration-150 ease-in-out"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? 0 : '-100%' }}
        transition={{ duration: 0.3 }}
        className="sm:hidden bg-black w-[200px] "
      >
        <div className="px-2 pt-2 pb-3 text-white">
        <Link><p>Home</p></Link>
            <Link><p>Home</p></Link>
            <Link><p>Home</p></Link>
            <Link><p>Home</p></Link>
        </div>
      </motion.div>
    </nav>
  );
};


