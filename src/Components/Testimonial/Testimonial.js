import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import testim1 from "../../assets/images/testim1.jpeg";
import testim2 from "../../assets/images/testim2.jpg";
import testim3 from "../../assets/images/testim3.jpg";
import testim4 from "../../assets/images/testim4.jpeg";
import testim5 from "../../assets/images/testim5.jpg";
import { CiCamera } from "react-icons/ci";

export const Testimonial = () => {
  const testimonials = [
    {
      quote:
        "I can't specify how much I love the variety and flavor of the dishes from Tingle Taste! Each meal appears like it's been lovingly prepared in a domestic kitchen, with spices which can be simply best. The flavors are so true, and it's clear that a lot of care and attention is going into every dish. This has become my go-to vicinity for Indian specialties, and I cannot recommend it enough!",
      img: testim1,
      author: "Heena Khan",

      company: "Gypr Pvt Ltd",
    },

    {
      quote:
        ". From the moment I took my first bite, I turned into transported back to the streets of India. The meals here are surely first rate! Each dish is a culinary masterpiece, bursting with taste and authenticity. It's obtrusive that the cooks take extraordinary satisfaction in their work, as the excellence of the food is top notch. If you're searching out a real taste of India, look no further. Tingle Taste is a gem!",
      img: testim2,
      author: "Ekta Singh",
      company: "EquipMedy"
    },
    {
      quote:
        "I recently visited here and ordered a whole lot of dishes for a small gathering, and I have to say, each person was blown away! The flavors had been wealthy and delicious, and the taste of the food was top-notch. It becomes like having a home made experience. Needless to mention, I'll actually be recommending it here again!",
      author: "Another Author",
      img: testim3,
      author: "Another Author",

      company: "TingleTaste",
    },
    {
      quote:
        ". I stumbled upon Tingle Taste at the same time as searching for genuine Indian food, and I'm so happy I did! The meals are yummy, and the service is excellent. It's clear that the team at the back of Tingle Taste is passionate about delivering high-quality Indian specialties to their customers. I've suggested it to all my pals and family, and I can't wait to try more dishes!",
      author: "Priya",
      img: testim4,
      company: "BitBeeMedia",
    },
    {
      quote:
        "As someone who loves Indian meals, I was pleased to discover Tingle Taste. I've tried several dishes so far, and each one has been a delight! The flavors are so true, and the satisfaction is next level. It's a super way to experience all Indian specialties from the comfort of staying at one place, specifically whilst you're yearning for a taste of India. I'll actually be an everyday consumer!",
      author: "Amit Yadav",
      img: testim5,
      company: "Gypr Pvt Ltd",
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
          dynamicBullets: true,
          clickable: true,
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
            <div className="  min-h-[370px] max-h-[370px] text-gray-400 group">
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

      {/* <div className="flex justify-center ">
        <div className="swiper-pagination  space-x-2">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className="swiper-pagination-bullet bg-blue-800 w-3 h-3 rounded-full cursor-pointer"
              onClick={() => handleClickPaginationBullet(index)}
            ></div>
          ))}
        </div>
      </div> */}
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







