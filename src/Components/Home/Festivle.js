import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
// import img1 from "../../assets/images/New folder/asset 15.jpeg"
import img1 from "../../assets/images/asset 15.jpeg"
import imgOneee from "../../assets/images/assetImag.jpeg"

import Burger from "../../assets/images/data/burger.jpg"
import cholekulche from "../../assets/images/data/cholekulche.jpg"
import coldcoffee from "../../assets/images/data/coldcoffee.jpg"
import grillsandwich from "../../assets/images/data/grillsandwich.jpg"
import idli from "../../assets/images/data/idli.jpg"
import kachorialoosabzi from "../../assets/images/data/kachori-with-aloo-sabzi.jpg"
import lassi from "../../assets/images/data/lassi.webp"
import littichokha from "../../assets/images/data/littichokha.jpg"
import makhanakheer from "../../assets/images/data/makhanakheer.jpg"
import momos from "../../assets/images/data/momos.webp"
import pasta from "../../assets/images/data/pasta.jpg"
import pavbhaji from "../../assets/images/data/pavbhaji.jpeg"
import poha from "../../assets/images/data/poha.webp"
import samosa from "../../assets/images/data/samosa.jpg"
import sattu from "../../assets/images/data/sattu.webp"
import springroll from "../../assets/images/data/springroll.jpg"
import vada from "../../assets/images/data/vada.jpg"
import vadapav from "../../assets/images/data/vadapav.jpg"




import logo from "../../assets/images/logo.png"
export const Festivle = () => {
  const FestivleData = [
    {
      quote:
        "Aptara’sertise has streamlined and simplified our have a single, trusted content production partner to handle all of our digital publishing needs.",
      author: "Director, Publishing Operations",
      companyLogo: img1,
    },
    {
      quote:
        "Aptara’s unique combination of digital technology and publishing expertise has streamlined and simplified our operations. We now have a single, trusted content production partner to handle all of our digital publishing needs. ",
      author: "Director, Publishing Operations",
      companyLogo: img1,
    },
    {
      quote: "Another testimonial quote of digital of digital technology and publishing expertise has streamlined and simplified technology and publishing expertise has streamlined and simplified.",
      author: "Another Author",
      companyLogo: logo,
    },
    {
      quote: "Another testimonial quote of digital of digital technology and publishing expertise has streamlined and simplified technology and publishing expertise has streamlined and simplified.",
      author: "Another Author",
      companyLogo: logo,
    },
    // Add more testimonials as needed
  ];

  return (
    <div className="py-[50px] pb-32"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(21,40,59, 0.5), rgba(21,40,59, 0.6)), url(${imgOneee})`,
        backgroundSize: "100% 100%",
        backgroundAttachment: "fixed",
      }}>
        <div className=" container mx-auto px-8 text-center "> 
        <p className="text-white text-xl">Ready for the coolest food</p>
        <h1 className="text-4xl font-semibold text-white mt-5 mb-8" >COMING FESTIVALS</h1>

        </div>

      <div className="flex max-sm:flex-col gap-5">

        <div className="w-full max-sm:w-full">
          <FestivleSlider festivle={FestivleData } />
        </div>
      </div>
    </div>
  );
};


export const FestivleSlider = ({ festivle }) => {
  const swiperRef = useRef(null);

  const handleClickPaginationBullet = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  return (
    <div className="container mx-auto px-8 relative mt-10 ">
      <Swiper
        ref={swiperRef}
        spaceBetween={20}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".button-next",
          prevEl: ".button-prev",
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          991: {
            slidesPerView: 3,
          },
        }}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="mySwiper"
      >
        {festivle.map((festivle, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white shadow-lg border rounded-[20px] hover:bg-gray-600  hover:text-white min-h-[430px]   max-h-[400px] p-6 font-medium text-gray-500 group ">
            <div className="company-logo">
                <img className="h-[180px] w-full" src={festivle.companyLogo} alt="" />
              </div>

              <p className="font-semibold text-gray-800 text-lg group-hover:text-orange-500 py-2">{festivle.author}</p>

              <p className="text-base">{festivle.quote}</p>
           
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center absolute right-[200px] top-[-60px]">
        <div className="">
          <div className="button-next bgSlideBtn  relative top-[-5px] text-white bg-gray-400 left-14">
            <BiChevronRight className="text-4xl" />
          </div>
          <div className="button-prev bgSlideBtn relative top-[-41px] right-6 text-base text-white bg-gray-400">
            <BiChevronLeft className="text-4xl" />
          </div>
        </div>
      </div>
    </div>
  );
};


