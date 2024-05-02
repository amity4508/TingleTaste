
import React from 'react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { Hero } from '../../Components/Hero/Hero';
import { Card, CardImg, cardData } from '../../Components/Cards/card';
import { Timing } from '../../Components/Home/Timing';
import { Festivle } from '../../Components/Home/Festivle';
import { GreatTest } from '../../Components/Home/GreatTest';
import { Card2, card2Data } from '../../Components/Cards/card2';
import { Menu } from '../../Components/MenuList/Menu';
import { Testimonial } from '../../Components/Testimonial/Testimonial';


export const Home = () =>{
    return(
        <>
   <div>
        <Hero/>
        <Card cardData={cardData} />
        <Timing/>
        <Festivle/>
        <GreatTest/>
        <Card2 card2Data={card2Data} />
        <Menu/>
        <Testimonial/>
        <CardImg cardData={cardData} />



   </div>
   </>

    )
}

