import React, { useState  } from "react";
import matterKachaodi from "../../assets/images/data/mutterkachodi1.jpg";
import littichokha from "../../assets/images/data/littichokha.jpg";
import samosa from "../../assets/images/data/samose3.jpg";
import burger from "../../assets/images/data/burger.jpg"
import cholekulche from "../../assets/images/data/cholekulche.jpg"
import makhanakheer from "../../assets/images/data/makhanakheer.jpg"
// import samosa from "../../assets/images/data/samosa.jpg"
import springroll from "../../assets/images/data/springroll.jpg"
import { CiCamera } from "react-icons/ci";
export const cardData = [
    {
      image: burger,
      category: "BURGERS",
      title: "Baconnaise Angus",
      description: "Burgers are a popular fast food item such as a cooked patty of beans, lentils, or vegetables, served in a sliced bread roll referred to as a bun. The available types of burgers based."
    },
    
    {
        image: cholekulche,
        category: "chole Kulche",
        title: "Baconnaise Angus",
        description: "Our very very own traditional dish from the Bihar and Jharkhand regions of India is now right here. Consisting of filled complete wheat dough balls (litti) which can be roasted over charcoal."
      },
      {
        image: springroll,
        category: "Spring Roll",
        title: "Baconnaise Angus",
        description: "Spring rolls, a famous Asian appetizer which includes a filling, frequently made with vegetables, paneer, or cheese rolled inside a thin pastry wrapper after which deep-fried or on occasion served clean. "
      },
      {
        image: matterKachaodi,
        category: "Matter Kachaodi",
        title: "Matar Kachaodi",
        description: `"Matar Kachori" or "Matar Ki Kachori" is a famous Indian snack made with a spiced green pea filling encased in a crisp, deep-fried pastry. Matar kachori is an excessive-calorie and high-fat snack because of deep frying. Enjoy the flavorful treat.`
      },
  ];

export const Card = ({ cardData }) => {
  return (
    <>
      <div className="container mx-auto px-8 grid  max-sm:gird-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5  ">
        {cardData.map((card, index) => (
          <div key={index} className="card  bg-white shadow-xl shadow-gray-200 transition duration-700 hover:scale-110">
            <div className="">
              <img
                className=" rounded "
                src={card.image}
                alt=""
              />
            </div>
            <div className="mx-auto  px-4 items-center">
              <div className="flex justify-center">
                <p className="bg-gray-700 rounded text-lg  text-center text-white py-1 relative w-[150px] top-[-8px]">
                  {card.category}
                </p>
              </div>
              {/* <h1 className="text-xl font-semibol text-center text-gray-500 ">
                {card.title}
              </h1> */}
              <p className="text-gray-600 py-2">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <hr  className="mt-10"/>

    </>
  );
};
// ----------------Card Img 


export const cardImg = [
  {
    image: matterKachaodi,
    category: "DESERT",
    title: "Baconnaise Angus",
    description: "Interdum iusto pulvinar consequuntur augue optio faguroso otto."
  },
  
  {
      image: littichokha,
      category: "DESERT",
      title: "Baconnaise Angus",
      description: "Interdum iusto pulvinar consequuntur augue optio faguroso otto."
    },
    {
      image: samosa,
      category: "DESERT",
      title: "Baconnaise Angus",
      description: "Interdum iusto pulvinar consequuntur augue optio faguroso otto."
    },
    {
      image: makhanakheer,
      category: "DESERT",
      title: "Baconnaise Angus",
      description: "Interdum iusto pulvinar consequuntur augue optio faguroso otto."
    },
 

];

export const CardImg = ({ cardImg }) => {
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
        {cardImg.map((card, index) => (
          <div key={index} className="card bg-white shadow-xl shadow-gray-200 group relative">
            <div className="overflow-hidden" onClick={() => openModal(card.image)}>
              <img
                className="transition duration-700 hover:scale-110 min-h-[250px] "
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
        <div className="fixed top-[30px] left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-10 ">
          <div className="bg-white p-4 relative ">
            <img src={selectedImage} alt="" />
            <button className=" absolute top-0 shadow-sm shadow-gray-200 right-0 px-2 bg-white text-xl font-semibold " onClick={closeModal}>
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
};
