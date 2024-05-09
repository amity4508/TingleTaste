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

import christmas from "../../assets/images/christmas.jpg"
import diwali  from "../../assets/images/diwali.jpg"
import holi from "../../assets/images/holi.jpg"
import eidulFitr from "../../assets/images/eid.png"
import pongal from "../../assets/images/pongal.jpeg"
import navratri from "../../assets/images/navratri.jpg"
import ganeshChaturthi  from "../../assets/images/ganesh chaturthi.jpg"
import durgaPuja  from "../../assets/images/durga pooja .jpg"
import Onam from "../../assets/images/onam.jpg"
import makarSankranti from "../../assets/images/makar shankaranti.jpg" 




import logo from "../../assets/images/logo.png"
export const Festivle = () => {
  const FestivleData = [
    {
      quote:
        "Indulge in our delectable sweets like Laddoos, Jalebis, Kaju Katli, and Gulab Jamun, best for celebrating the joyous event of Diwali.",
      author: "Diwali - Festival of Lights",
      companyLogo: diwali,
    },
    {
      quote:
        "Add coloration for your celebrations with our Gujiyas, Thandai, and other festive treats with a purpose to make your Holi celebrations even greater colourful.",
      author: "Holi - Festival of Colors",
      companyLogo: holi,
    },

    {
      quote: "Spread the holiday cheer with our Plum Cakes, Kulkuls, and other Christmas specials so as to add a touch of sweetness to your celebrations.",
      author: "Christmas - Festival of Joy",
      companyLogo: christmas,
    },
  
    {
      quote: "Celebrate the bounty of the harvest with our Pongal and Vada, traditional South Indian dishes which are an ought-to-have at some stage in this festive season.",
      author: "Pongal - Harvest Festival",
      companyLogo: pongal,
    },
    {
      quote: "Enjoy our unique fasting ingredients like Sabudana Khichdi, Kuttu Ki Puri, and Singhare Ke Atte Ka Halwa, perfect for staring at the Navratri fast.",
      author: "Navratri - Festival of Nine Nights",
      companyLogo: navratri,
    },
    {
      quote: "Celebrate the victory of accuracy over evil with our Bengali chocolates like Rasgulla, Sandesh, and Mishti Doi, ideal for presenting to the goddess and sharing with cherished ones.",
      author: "Durga Puja - Festival of Goddess Durga",
      companyLogo: durgaPuja,
    },

    {
      quote: "Experience the flavors of Kerala with our Onam Sadhya, a conventional feast served on banana leaves, proposing a variety of delicious dishes like Avial, Thoran, and Payasam.",
      author: "Onam - Harvest Festival of Kerala",
      companyLogo: Onam,
    },
    {
      quote: "Celebrate the advent of spring with our Til Laddoos, Gajar Ka Halwa, and different festive treats that are an image of prosperity and right fortune.",
      author: "Makar Sankranti - Festival of Harvest",
      companyLogo: makarSankranti,
    },
    {
      quote: "Enjoy the spirit of Eid with our Sheer Khurma, and other traditional dishes which are ideal for sharing with a circle of relatives and friends.",
      author: "Eid-ul-Fitr - Festival of Breaking the Fast",
      companyLogo: eidulFitr,
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
        
        <p className="text-white text-xl">Celebrate Festivals with Our Special Occasion Foods!</p>
        <h1 className="text-4xl font-semibold text-white mt-5 mb-8 uppercase" >Coming Festivals</h1>
        
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
            <div className="bg-white shadow-lg border rounded-[20px] hover:bg-gray-600  hover:text-white min-h-[390px] max-h-[390px] p-6 font-medium text-gray-500 group ">
            <div className="company-logo">
                <img className="h-[170px] w-full rounded" src={festivle.companyLogo} alt="" />
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


