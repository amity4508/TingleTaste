import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import { Navbar } from '../Components/Navbar/Navbar';
import { Home } from '../Pages/HomeLayouts/home';
import { About } from '../Pages/About';
import { Footer } from '../Components/Footer/Footer';
import { Menu } from '../Components/MenuList/Menu';

export const UserRoute = () => {
  return (
   <BrowserRouter>
    <Navbar />
    <Routes>

    <Route path='/' element={<Home />} />
    <Route path='menu-list/' element={<Menu/>} />
  
    </Routes>
    <Footer/>
    </BrowserRouter>

  );
};
