import React, { useState  } from "react";
import img1 from "../../assets/images/New folder/asset 10.jpeg";
import { CiCamera } from "react-icons/ci";
export const cardData = [
    {
      image: img1,
      category: "DESERT",
      title: "Baconnaise Angus",
      description: "Interdum iusto pulvinar consequuntur augue optio faguroso otto."
    },
    
    {
        image: img1,
        category: "DESERT",
        title: "Baconnaise Angus",
        description: "Interdum iusto pulvinar consequuntur augue optio faguroso otto."
      },
      {
        image: img1,
        category: "DESERT",
        title: "Baconnaise Angus",
        description: "Interdum iusto pulvinar consequuntur augue optio faguroso otto."
      },
      {
        image: img1,
        category: "DESERT",
        title: "Baconnaise Angus",
        description: "Interdum iusto pulvinar consequuntur augue optio faguroso otto."
      },
   
  
  ];

export const Card = ({ cardData }) => {
  return (
    <>
      <div className="container mx-auto px-8 grid  max-sm:gird-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5  ">
        {cardData.map((card, index) => (
          <div key={index} className="card bg-white shadow-xl shadow-gray-200 ">
            <div className="overflow-hidden">
              <img
                className="transition duration-700 hover:scale-110"
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
              <h1 className="text-xl font-semibol text-center text-gray-500 ">
                {card.title}
              </h1>
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
