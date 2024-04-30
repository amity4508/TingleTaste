
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../../assets/images/New folder/asset 0.jpeg'
import img2 from '../../assets/images/New folder/asset 1.jpeg'
import img3 from '../../assets/images/New folder/asset 0.jpeg'



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
    title: 'DELICIOUS ITALIAN HOME MADE CUISINE',
    subtitle: 'Create engaging content Lorem ipsum dolor  amet Lorem ipsum dolor sit  amet Lorem ipsum dolor sit  sit amet amet consectetur adipisicing elit. Hic, inventore?',
    buttonText: 'view menu',
    image: img1,
  },
  {
    title: 'DELICIOUS ITALIAN HOME MADE CUISINE',
    subtitle: 'Create engaging content Lorem ipsum  amet Lorem ipsum dolor sit  dolor sit amet amet consectetur adipisicing elit. Hic, inventore?',
    buttonText: 'Reserve now',
    image: img2,
  },
  {
    title: 'DELICIOUS ITALIAN HOME MADE CUISINE',
    subtitle: 'Create engaging content Lorem ipsum dolor sit amet amet Lorem ipsum dolor sit amet amet consectetur adipisicing elit. Hic, inventore?',
    buttonText: 'Talk to an Expert',
    image: img3,
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
    <div className='bg-white pb-10 relative '>
      <div className='left-[-79px] z-10 top-[40%] fixed  '>
        <button className='text-white text-lg bg-orange-500 px-[50px] py-[6px] rotate-[-90deg] '>
          Enquire Now
        </button>
      </div>
      <Swiper
        ref={swiperRef}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        effect={'fade'}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
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
            <div className='flex  justify-between max-md:flex-col gap-30  relative'>
              <div className='w-1/2 sm:h-[88vh]  max-sm:h-[70vh] py-5 max-md:w-full bg-white '>
                <div className='flex justify-center container mx-auto mt-20 px-8 max-sm:ml-6 sm:ml-10'>
                  <div>
                    <h1 className='sm:text-5xl max-sm:text-4xl font-extrabold text-start leading-[60px] jersey-25-regular text-black '>{slide.title}</h1>
                    <h1 className='mt-14 max-sm:mt-8 text-2xl max-sm:text-base  font-medium text-start text-black'>{slide.subtitle}</h1>
                    <div className='text-start mt-16 flex gap-4'>
                      <button className='text-white text-lg font-bold bg-orange-500 px-[30px] py-[8px] rounded '>
                        {slide.buttonText}
                      </button>
                      <button className='text-white text-lg font-bold bg-orange-500 px-[30px] py-[8px] rounded '>
                        {slide.buttonText}
                      </button>
                    </div>
                    
                  </div>
                </div>
              </div>
              <div className='relative max-sm:hidden'>
                <img className=' sm:h-[520px] max-sm:h-[260px] lg:w-[780px] max-md:w-full shadow-2xl shadow-gray-700 ' src={slide.image} alt='' />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
        {/* Custom pagination */}
        <div className='relative top-[-60px]   '>
        <div className='swiper-pagination mt-5 flex justify-center space-x-2 relative left-[200px]'>
          {slides && slides.map((_, index) => (
            <div
              key={index}
              className='swiper-pagination-bullet bg-blue-800 w-3 h-3 rounded-full cursor-pointer'
              onClick={() => handleClickPaginationBullet(index)}
            ></div>
          ))}
        </div>
      </div>

    
    </div>
    
  );
};


