
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../../assets/images/data/littichokha2.jpg'
import img2 from '../../assets/images/data/makhanakheer2.jpg'
import img3 from '../../assets/images/data/poha1.jpg'
import img4 from '../../assets/images/data/sattu1.jpg'
import img5 from '../../assets/images/data/lassi1.jpg'
import img6 from '../../assets/images/data/mutterkachodi1.jpg'



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
    subtitle: 'Create sum dolor  amet Lorem ipsum dolor sit  amet Lorem ipsum dolor sit  sit amet amet consectetur adipisicing elit. Hic, inventore?',
  
    image: img1,
  },
  {
    title: 'DELICIOUS HOME MADE  <span style="color:orange">Makhana Kheer</span> ',
    subtitle: 'Create sum  amet Lorem ipsum dolor sit  dolor sit amet amet consectetur adipisicing elit. Hic, inventore?',
  
    image: img2,
  },
  {
    title: 'DELICIOUS HOME MADE <span style="color:orange"> Poha</span>',
    subtitle: 'Create engaging content Lorem ipsum dolor sit amet amet Lorem ipsum dolor sit amet amet consectetur adipisicing elit. Hic, inventore?',
  
    image: img3,
  },
  {
    title: 'DELICIOUS HOME MADE <span style="color:orange"> Sattu</span>',
    subtitle: 'Create engaging content Lorem ipsum dolor sit amet amet Lorem ipsum dolor sit amet amet consectetur adipisicing elit. Hic, inventore?',
  
    image: img4,
  },
  {
    title: 'DELICIOUS HOME MADE <span style="color:orange">Lassi</span>',
    subtitle: 'Create engaging content Lorem ipsum dolor sit amet amet Lorem ipsum dolor sit amet amet consectetur adipisicing elit. Hic, inventore?',
    image: img5,
  },
  {
    title: 'DELICIOUS HOME MADE <span style="color:orange">Mutter kacuari</span>',
    subtitle: 'Create engaging content Lorem ipsum dolor sit amet amet Lorem ipsum dolor sit amet amet consectetur adipisicing elit. Hic, inventore?',
 
    image: img6,
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
            <div className=' flex max-sm:h-[80vh]  justify-between sm:flex-col lg:flex-row gap-30 max-sm:flex-col  relative bg-white pb-10 '>
              <div className='  max-sm:h-full sm:py-5 max-sm:w-full sm:w-full lg:w-1/2 '>
                <div className='flex justify-center container mx-auto mt-10 xl:px-8 sm:px-2 max-sm:px-3 '>
                  <div>
                   <div className='min-h-[160px]'>
                   <h1  className='xl:text-5xl sm:text-4xl md:text-3xl max-sm:text-3xl font-extrabold text-start leading-[60px] jersey-25-regular text-black 'dangerouslySetInnerHTML={{ __html: slide.title}} ></h1>
                    <h1 className='mt-14 max-sm:mt-8 text-2xl max-sm:text-base  font-medium text-start text-black'>{slide.subtitle}</h1>
                   </div>
                    <div className='text-start mt-14 flex gap-4   '>
                      <button className='text-white text-lg font-bold bg-orange-500 px-[30px] xl:py-[8px] sm:px-[20px]  rounded '>
                       View Menu
                      </button>
                      <button className='text-white text-lg font-bold bg-orange-500 px-[30px] xl:py-[8px] sm:px-[20px] rounded '>
                       View Menu
                      </button>
                    </div>
                    
                  </div>
                </div>
              </div>
              <div className='relative max-sm:mt-5 sm:px-2 max-sm:px-3  min-h-[500px] lg:sm:h-full'>
                <img className=' sm:min-h-[450px]  lg:h-[490px] max-sm:h-[260px] lg:w-[780px] max-sm:w-full sm:w-full rounded border-2 shadow-lg border-orange-400 p-[1px] shadow-gray-700 ' src={slide.image} alt='' />
              </div>

          

           
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
     
    

    
    </div>
    
  );
}; 