import React from "react";
import img1 from "../../assets/images/New folder/asset 10.jpeg";
export const card2Data = [
    {
      image: img1,
      price: "120",
      title: "Baconnaise Angus",
      description: "Interdum iusto pulvinar consequuntur augue optio faguroso otto."
    },
    
    {
        image: img1,
        price: "120",
        title: "Baconnaise Angus",
        description: "Interdum iusto pulvinar consequuntur augue optio faguroso otto."
      },
      {
        image: img1,
        price: "120",
        title: "Baconnaise Angus",
        description: "Interdum iusto pulvinar consequuntur augue optio faguroso otto."
      },
      {
        image: img1,
        price: "120",
        title: "Baconnaise Angus",
        description: "Interdum iusto pulvinar consequuntur augue optio faguroso otto."
      },
      {
        image: img1,
        price: "120",
        title: "Baconnaise Angus",
        description: "Interdum iusto pulvinar consequuntur augue optio faguroso otto."
      },
      {
        image: img1,
        price: "120",
        title: "Baconnaise Angus",
        description: "Interdum iusto pulvinar consequuntur augue optio faguroso otto."
      },
      {
        image: img1,
        price: "120",
        title: "Baconnaise Angus",
        description: "Interdum iusto pulvinar consequuntur augue optio faguroso otto."
      },
      {
        image: img1,
        price: "120",
        title: "Baconnaise Angus",
        description: "Interdum iusto pulvinar consequuntur augue optio faguroso otto."
      },
   
   
  
  ];

export const Card2 = ({ card2Data }) => {
  return (
    <>
      <div className="container mx-auto mt-16 px-8 grid  max-sm:gird-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5  ">
        {card2Data.map((card2, index) => (
          <div key={index} className="card bg-white shadow-xl shadow-gray-200 relative group">
            <div className="overflow-hidden relative ">
              <img
                className="transition h-[350px] duration-700 group-hover:scale-150 filter blur-[1px] "
                src={card2.image}
                alt=""
              />
            </div> 
            <div className="mx-auto  px-4 py-3 items-center absolute top-0  h-full w-full mt-20  ">
              <div className="flex justify-start ">
                <p className=" rounded text-xl bg-gray-100 font-semibold  text-center text-black py-1 relative w-[100px] top-[-8px]">
                  {card2.price} Rs
                </p>
              </div>
              <h1 className="text-3xl font-semibol mt-5 text-center text-blue-900 font-bold ">
                {card2.title}
              </h1>
              <p className="text-white font-bold py-2 mt-3">
                {card2.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <hr  className="mt-10"/>

    </>
  );
};

