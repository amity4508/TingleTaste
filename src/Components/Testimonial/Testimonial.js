import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import testim1 from "../../assets/images/New folder/asset36.jpeg";
import testim2 from "../../assets/images/New folder/asset38.jpeg";
import { CiCamera } from "react-icons/ci";

export const Testimonial = () => {
  const testimonials = [
    {
      quote:
        "Lorem ipsum dolor sitame consectetur adipisicing elitosed do eiusmod tempor malo incididunt ut labore et dolore atroce.",
      author: "Director, Publishing Operations",
      img: testim1,
      company: "Twitter",
    },

    {
      quote:
        "Aptara’s unique combination of digital technology and publishing expertise has streamlined and simplified our operations. We now have a single, trusted content production partner to handle all of our digital publishing needs. ",
      author: "Director, Publishing Operations",
      img: testim2,
      company: "Twitter",
    },
    {
      quote:
        "Another testimonial quote of digital of digital technology and publishing expertise has streamlined and simplified technology and publishing expertise has streamlined and simplified.",
      author: "Another Author",
      img: testim1,
      company: "Twitter",
    },
    {
      quote:
        "Another testimonial quote of digital of digital technology and publishing expertise has streamlined and simplified technology and publishing expertise has streamlined and simplified.",
      author: "Another Author",
      img: testim2,
      company: "Twitter",
    },
    {
      quote:
        "Another testimonial quote of digital of digital technology and publishing expertise has streamlined and simplified technology and publishing expertise has streamlined and simplified.",
      author: "Another Author",
      img: testim1,
      company: "Twitter",
    },
    // Add more testimonials as needed
  ];

  return (
    <div className="bg-gray-200">
      <div className="container mx-auto mb-10  lg:px-8">
        <div className="flex max-sm:flex-col gap-5">
          <div className="w-full max-sm:w-full">
            <TestimonialSlider testimonials={testimonials} />
          </div>

          
        </div>
      </div>
    </div>
  );
};

export const TestimonialSlider = ({ testimonials }) => {
  const swiperRef = useRef(null);

  const handleClickPaginationBullet = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  return (
    <div className="relative py-20">
      <Swiper
        ref={swiperRef}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
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
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="  min-h-[300px] max-h-[300px] text-gray-400 group cur">
              {/* <div className="bg-white rounded p-4">
                <p className="text-base font-[400]">{testimonial.quote}</p>
              </div> */}
              <div class="relative">
                <div class="bg-white border   border-gray-200 rounded p-4 ">
                  <p className="text-base font-[400]">{testimonial.quote}</p>
                  <div class="absolute w-3 h-3 bg-white   transform rotate-45 bottom-[-5px] left-1/2 -translate-x-1/2"></div>
                </div>
              </div>

              <div className="company-logo flex items-center gap-5 mt-3 ">
                <img
                  className="h-[70px] w-[70px] rounded-full"
                  src={testimonial.img}
                  alt=""
                />
                <div>
                  <p className="font-semibold group-hover:text-gray-800  text-orange-500 py-2">
                    {testimonial.author}
                  </p>
                  <p>{testimonial.company}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center ">
        <div className="swiper-pagination  space-x-2">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className="swiper-pagination-bullet bg-blue-800 w-3 h-3 rounded-full cursor-pointer"
              onClick={() => handleClickPaginationBullet(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};




export const CardImg = ({ cardData }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalOpen(false);
  };

  return (
    <>
      <div className="container mx-auto px-8 grid  max-sm:gird-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
        {cardData.map((card, index) => (
          <div key={index} className="card bg-white shadow-xl shadow-gray-200 group relative">
            <div className="overflow-hidden" onClick={() => openModal(card.image)}>
              <img
                className="transition duration-700 hover:scale-110"
                src={card.image}
                alt=""
              />
            </div>
            <div className="mx-auto  px-4 items-center group-hover:absolute top-[70px] left-[60px] justify-center  flex">
              <div className="flex justify-center  invisible group-hover:visible">
                <p className="bg-white rounded-sm  text-lg  text-gray-600 relative left-14 ">
                <CiCamera className="text-2xl" onClick={() => openModal(card.image)} />

                </p>
              </div>
             
            </div>
            
          </div>
          
        ))}
      </div>

      {modalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-10 ">
          <div className="bg-white p-8 relative ">
            <img src={selectedImage} alt="" />
            <button className=" absolute top-0 right-0 px-2" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}

    </>
  );
};







