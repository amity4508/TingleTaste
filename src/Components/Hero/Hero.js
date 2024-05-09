
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import lassi from "../../assets/images/data/lassi.webp"
import littichokha from "../../assets/images/data/littichokha.jpg"
import makhanakheer from "../../assets/images/data/makhanakheer.jpg"
import mutterkachodi from "../../assets/images/data/mutterkachodi2.jpg";
import poha from "../../assets/images/data/poha.webp"
import sattu from "../../assets/images/data/sattu.webp"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
// import required modules
import { Autoplay, Pagination, Navigation, EffectFade, } from 'swiper/modules';
export const Hero = () =>{
    return(
        <>
        <HeroSlider slides={slides}/>
     </>
    )
}

export const slides = [
  {
    title: `DELICIOUS HOME MADE <span style="color:orange">Litti Chokha</span> `,
    subtitle: `Our very very own traditional dish from the Bihar and Jharkhand regions of India is now right here. Consisting of filled complete wheat dough balls (litti) which can be roasted over charcoal or cow dung cakes and served with a spicy mashed vegetable dish (chokha), typically made with roasted eggplant, tomatoes, and potatoes. Here are the to be had kinds of litti chokha based on their versions:`,
    image: littichokha,
  },
  {
    title: 'DELICIOUS HOME MADE  <span style="color:orange">Makhana Kheer</span> ',
    subtitle:  `A creamy and delicious dessert made with makhana, additionally called fox nuts or lotus seeds. It is a popular dish in North India, in particular throughout festivals and special occasions. Makhana kheer is a delicious and nutritious dessert that is simple to make and perfect for pleasurable your candy cravings.`,
    image: makhanakheer,
  },
  {
    title: 'DELICIOUS HOME MADE <span style="color:orange"> Poha</span>',
    subtitle: `Enjoy the most popular breakfast dish in India crafted from flattened, dehusked rice. It is mild, clean to digest, and a nutritious meal option. Poha is wealthy in carbohydrates, which provide energy, and it's also a good source of iron and fiber. It is low in calories and fats, making it a wholesome breakfast choice`,
  
    image: poha,
  },
  {
    title: 'DELICIOUS HOME MADE <span style="color:orange"> Sattu</span>',
    subtitle: `Introducing our fresh and nutritious Sattu drink, a conventional Indian beverage, it truly is best for staying cool and energized! Sattu, made from roasted gram flour, is blended with water, sugar, and a hint of lemon juice or spices to create a delicious and healthy drink. Whether you're looking for a cool drink to overcome the heat or a nutritious option to maintain you going, our Sattu drink is the correct choice. Try it now and revel in the flavor of subculture with every sip!`,
  
    image: sattu,
  },
  {
    title: 'DELICIOUS HOME MADE <span style="color:orange">Lassi</span>',
    subtitle:`Popular traditional yogurt-based totally drink from the Indian subcontinent. It is made with the aid of blending yogurt with water and spices, and on occasion fruit or sugar, to create a fresh and nutritious beverage. Lassi is understood for its cooling properties and is often served chilled, specially in the course of warm summer time months. It is also an excellent supply of probiotics, calcium, and protein, making it a wholesome and clean beverage preference.`,
    image: lassi,
  },
  {
    title: 'DELICIOUS HOME MADE <span style="color:orange">Mutter kacuari</span>',
    subtitle:`"Matar Kachori" or "Matar Ki Kachori" is a famous Indian snack made with a spiced green pea filling encased in a crisp, deep-fried pastry. Matar kachori is an excessive-calorie and high-fat snack because of deep frying. However, it presents protein and fiber from the peas and some nutrients from the spices used. Enjoy the flavorful treat.`,
 
    image: mutterkachodi,
  },
  // Add more slide objects as needed
];


export const HeroSlider = ({ slides }) => {
  const swiperRef = useRef(null);

  const handleClickPaginationBullet = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  return (
    <div className=' container mx-auto bg-white pb-10 relative '>
      {/* <div className='left-[-79px] z-10 top-[40%] fixed  '>
        <button className='text-white text-lg bg-orange-500 px-[50px] py-[6px] rotate-[-90deg] '>
          Enquire Now
        </button>
      </div> */}
      <Swiper
        ref={swiperRef}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        effect={'fade'}
        // pagination={{
        //   clickable: true,
        //   el: '.swiper-pagination',
        // }}
             pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        navigation={{
          nextEl: '.button-next',
          prevEl: '.button-prev',
        }}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className='mySwiper'
      >
        {slides && slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className=' flex max-sm:h-[80vh]  justify-between sm:flex-col lg:flex-row  max-sm:flex-col  relative bg-white pb-2 '>
              <div className='  max-sm:h-full sm:py-5 max-sm:w-full sm:w-full lg:w-1/2 '>
                <div className='flex justify-center container mx-auto mt-10 xl:px-8 sm:px-2 max-sm:px-3 '>
                  <div>
                   <div className=''>
                   <h1  className='xl:text-5xl sm:text-4xl md:text-3xl max-sm:text-3xl font-extrabold text-start leading-[60px] jersey-25-regular text-black freeman-regular 'dangerouslySetInnerHTML={{ __html: slide.title}} ></h1>
                    <h1 className='mt-8 max-sm:mt-2 text-lg max-sm:text-base  font-medium text-start text-gray-800 prata-regular'>{slide.subtitle}</h1>
                   </div>
                    <div className='text-start mt-8 flex gap-4   '>
                      <button className='text-white text-lg font-bold bg-orange-500 px-[30px] xl:py-[8px] sm:px-[20px]  rounded '>
                       VIEW MENU
                      </button>
                  
                    </div>
                    
                  </div>
                </div>
              </div>
              <div className='relative max-sm:mt-5 sm:px-2 max-sm:px-3  min-h-[500px] lg:sm:h-full'>
                <img className=' sm:min-h-[450px]  lg:h-[490px] max-sm:h-[350px] lg:w-[780px] max-sm:w-full sm:w-full rounded border-2 shadow-lg border-orange-400 p-[1px] shadow-gray-700 ' src={slide.image} alt='' />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
     
    

    
    </div>
    
  );
}; 