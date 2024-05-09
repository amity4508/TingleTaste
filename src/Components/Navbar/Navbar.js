// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import logo from '../../assets/images/New folder/asset 3.png'
// import logo2 from '../../assets/images/logo.png'
// import { Link } from 'react-router-dom';
// import { SocialMedia } from '../SocialMedia/SocialMedia';

//  export const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="bg-white  py-3 ">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex w-1/2">
//             <div className="flex-shrink-0 flex items-center">
//                 <img className='h-[70px] w-[200px]' src={logo2} alt="" />

//             </div>
//           </div>
//           <div className="flex w-1/2 flex-row gap-4 max-sm:hidden justify-items-end text-xl font-medium ">
//           <Link><p>Home</p></Link>
//             <Link><p>Menu</p></Link>
//           </div>
//           <div>
//           <SocialMedia/>

//           </div>

//           <div className="mr-2 flex md:hidden">
//             <button
//               onClick={toggleSidebar}
//               className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 transition duration-150 ease-in-out"
//             >
//               <svg
//                 className="h-6 w-6"
//                 stroke="currentColor"
//                 fill="none"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16m-7 6h7"
//                 />
//               </svg>
//             </button>
//           </div>

//         </div>
//       </div>

//       {/* Sidebar */}
//       <motion.div
//         initial={{ x: '-100%' }}
//         animate={{ x: isOpen ? 0 : '-100%' }}
//         transition={{ duration: 0.3 }}
//         className="sm:hidden bg-black w-[200px] "
//       >
//         <div className="px-2 pt-2 pb-3 text-white">
//         <Link><p>Home</p></Link>
//             <Link><p>Home</p></Link>
//             <Link><p>Home</p></Link>
//             <Link><p>Home</p></Link>
//         </div>
//       </motion.div>
//     </nav>
//   );
// };

import React, { useState } from "react";

import logo from "../../assets/images/logo.png";
import logo2 from "../../assets/images/final logo tt copy.png";

import { Link, NavLink } from "react-router-dom";
import { SocialMedia } from "../SocialMedia/SocialMedia";

export const menuItems = [
  { label: "Home", link: "/" },

  { label: "Menu", link: "menu-list/" },
];

export const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const [activeItem, setActiveItem] = useState(0);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
  };
  return (
    <>
      <div className="w-[100%] border-bottom mb-[100px] ">
        <nav className="bg-white max-sm:shadow-lg shadow-gray-20 w-full fixed top-0 z-50 ">
          <div className="max-sm:flex sm:flex  max-sm:justify-between sm:justify-between ">
            <div className="flex md:hidden sm:w-0 max-sm:bg-white max-sm:justify-center max-sm:items-center px-2">
              <button
                onClick={toggleSidebar}
                className="text-white   max-sm:text-black"
              >
                <svg
                  className="w-6 h-6 text-4xl"
                  fill="none"
                  stroke="currentColor"
                  viewBox="-0 5 20 20"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>

            <div className=" flex container mx-auto  ">
              {/* logo */}
              <div class="md:order-1 max-sm:w-full  sm:w-full  flex items-start justify-center py-2  max-sm:bg-white">
                <img className="h-[70px] w-[200px]" src={logo} alt="logo" />
              </div>

              <div className="md:order-2  items-center justify-end logobg   sm:w-full  hidden sm:block px-5">
                <div className="flex items-center justify-center h-full">
                  <div className="flex flex-col items-center">
                    <ul className="flex flex-col items-center  sm:flex-row  md:gap-10 max-sm:gap-4 sm:gap-4">
                      {menuItems.map((menuItem, index) => (
                        <li key={index}>
                          {menuItem.dropdown ? (
                            <div
                              onMouseEnter={() => setActiveItem(index)}
                              onMouseLeave={() => setActiveItem(null)}
                              className="relative"
                            >
                              <p className="text-gray-900 text-lg cursor-pointer">
                                {menuItem.label}
                              </p>
                              {activeItem === index && (
                                <ul className="absolute top-full  w-[240px] left-0 bg-gray-300 shadow-lg rounded-md py-2 px-4">
                                  {menuItem.dropdown.map((item, i) => (
                                    <li
                                      key={i}
                                      className="text-gray-900 hover:text-orange-500 text-lg"
                                    >
                                      <NavLink
                                        to={item.link}
                                        activeClassName="active"
                                        onClick={() => handleItemClick(index)}
                                      >
                                        {item.label}
                                      </NavLink>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ) : (
                            <NavLink
                              to={menuItem.link}
                              activeClassName="active"
                              onClick={() => handleItemClick(index)}
                            >
                              <p
                                className={`text-gray-900 text-xl hover:text-orange-500 ${
                                  activeItem === index ? "text-orange-500 " : ""
                                }`}
                              >
                                {menuItem.label}
                              </p>
                            </NavLink>
                          )}
                        </li>
                      ))}
                      <SocialMedia />
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {showSidebar && (
        <div className="fixed inset-0 bg-blue-900  text-white z-50 w-[200px] p-4">
          <div className="flex  p-1 justify-between ">
            <div>
              <img className="h-[6  0px] w-[100px]  " src={logo} alt="logo" />
            </div>
            <div>
              <button
                onClick={closeSidebar}
                className="text-white bg-gray-500 rounded p-1"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          {/* sidebar */}
          <Sidebar />
        </div>
      )}
    </>
  );
};

export const Sidebar = () => {
  return (
    <div className="px-2 pt-2  text-xl font-bold ">
      <Link>
        <p className="mt-5">Home</p>
      </Link>
      <Link>
        <p className="mt-5">Home</p>
      </Link>
      <Link>
        <p className="mt-5">Home</p>
      </Link>
      <Link>
        <p className="mt-5">Home</p>
      </Link>
      <SocialMedia />
    </div>
  );
};
