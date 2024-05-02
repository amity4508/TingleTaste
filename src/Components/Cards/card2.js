import React from "react";
import img1 from "../../assets/images/data/littichokha2.jpg";
import img2 from "../../assets/images/data/badammilk1.jpg";
import img3 from "../../assets/images/data/burger1.jpg";
import img4 from "../../assets/images/data/chole kulche1.jpg";
import img5 from "../../assets/images/data/coldcoffee2.jpg";
import img6 from "../../assets/images/data/grilledsandwich1.jpg";
import img7 from "../../assets/images/data/idli2.jpg";
import img8 from "../../assets/images/data/lassi3.jpg";
import img9 from "../../assets/images/data/makhanakheer1.jpg";

import img10 from "../../assets/images/data/momos3.jpg";
import img11 from "../../assets/images/data/mutterkachodi2.jpg";
import img12 from "../../assets/images/data/pasta1.jpg";
import img13 from "../../assets/images/data/pavbhaji3.jpg";
import img14 from "../../assets/images/data/poha1.jpg";
import img15 from "../../assets/images/data/samose2.jpg";
import img16 from "../../assets/images/data/sattu1.jpg";
import img17 from "../../assets/images/data/springrole1.jpg";
import img18 from "../../assets/images/data/vada2.jpg";
import img19 from "../../assets/images/data/vadapaw1.jpg";




export const card2Data = [
    {
      image: img1,
      price: "0",
      title: "Litti chokha",
      // description: "Interdum iusto pulvinar consequuntur augue optio faguroso otto."
    },
    
    {
        image: img2,
        price: "0",
        title: "Badam Milk",
        // description: "Interdum iusto pulvinar consequuntur augue optio faguroso otto."
      },
      {
        image: img3,
        price: "0",
        title: "Burger",
        // description: "Interdum iusto pulvinar consequuntur augue optio faguroso otto."
      },
 
      {
        image: img4,
        price: "0",
        title: "Chole Kulche",
        // description: "Interdum iusto pulvinar consequuntur augue optio faguroso otto."
      },
      {
        image: img5,
        price: "0",
        title: "Cold coffee",
        // description: "Interdum iusto pulvinar consequuntur augue optio faguroso otto."
      },
      {
        image: img6,
        price: "0",
        title: "Grill Snadwiches",
        // description: "Interdum iusto pulvinar consequuntur augue optio faguroso otto."
      },
      {
        image: img7,
        price: "0",
        title: "Idli",
        // description: "Interdum iusto pulvinar consequuntur augue optio faguroso otto."
      },
      {
        image: img8,
        price: "0",
        title: "Lassi",
        // description: "Interdum iusto pulvinar consequuntur augue optio faguroso otto."
      },
      {
        image: img9,
        price: "0",
        title: "Makhana Kheer",
        // description: "Interdum iusto pulvinar consequuntur augue optio faguroso otto."
      },
      {
        image: img10,
        price: "0",
        title: "Mommos",
        // description: "Interdum iusto pulvinar consequuntur augue optio faguroso otto."
      },
      {
        image: img11,
        price: "0",
        title: "Mutter kacuari",
        // description: "Interdum iusto pulvinar consequuntur augue optio faguroso otto."
      },
      {
        image: img12,
        price: "0",
        title: "Pasta",
        // description: "Interdum iusto pulvinar consequuntur augue optio faguroso otto."
      },
      {
        image: img13,
        price: "0",
        title: "Paw bhaji",
        // description: "Interdum iusto pulvinar consequuntur augue optio faguroso otto."
      },
      {
        image: img14,
        price: "0",
        title: "Poha",
        // description: "Interdum iusto pulvinar consequuntur augue optio faguroso otto."
      },
      {
        image: img15,
        price: "0",
        title: "Samosa",
        // description: "Interdum iusto pulvinar consequuntur augue optio faguroso otto."
      },
      {
        image: img16,
        price: "0",
        title: "Sattu",
        // description: "Interdum iusto pulvinar consequuntur augue optio faguroso otto."
      },
      {
        image: img17,
        price: "0",
        title: "Spring role",
        // description: "Interdum iusto pulvinar consequuntur augue optio faguroso otto."
      },
      {
        image: img18,
        price: "0",
        title: "Bada",
        // description: "Interdum iusto pulvinar consequuntur augue optio faguroso otto."
      },
      {
        image: img19,
        price: "0",
        title: "Bada Paw",
        // description: "Interdum iusto pulvinar consequuntur augue optio faguroso otto."
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
                className="transition h-[300px] duration-700 group-hover:scale-150 filter blur-[1px] "
                src={card2.image}
                alt=""
              />
            </div> 
            <div className="mx-auto  px-4 py-3 items-center absolute top-0  h-full w-full mt-20 group ">
              <div className="flex justify-center ">
              
             
             <div className="hidden group-hover:block text-center ">
             <p className=" rounded text-xl bg-gray-100 font-semibold m-auto  text-center text-black py-1 relative w-[100px] top-[-8px]">
                  {card2.price} Rs
                </p>
             <h1 className="text-xl min-w-[150px] w-max p-1 font-semibol mt-5 text-center rounded-sm bg-opacity-80 bg-gray-500 text-white font-bold ">
                {card2.title}
              </h1>
              <p className="text-white font-bold py-2 mt-3">
                {card2.description}
              </p>
             </div>
            </div>
            </div>
          </div>
        ))}
      </div>
      <hr  className="mt-10"/>

    </>
  );
};

