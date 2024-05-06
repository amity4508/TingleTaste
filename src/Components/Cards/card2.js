import React from "react";


import badamMilk from "../../assets/images/data/badammilk1.jpg";
import burger from "../../assets/images/data/burger.jpg"
import cholekulche from "../../assets/images/data/cholekulche.jpg"
import coldcoffee from "../../assets/images/data/coldcoffee.jpg";
import grillsandwich from "../../assets/images/data/grillsandwich.jpg"
import idli from "../../assets/images/data/idli.jpg"
import kachorialoosabzi from "../../assets/images/data/kachori-with-aloo-sabzi.jpg"
import lassi from "../../assets/images/data/lassi.webp"
import littichokha from "../../assets/images/data/littichokha.jpg"
import makhanakheer from "../../assets/images/data/makhanakheer.jpg"
import momos from "../../assets/images/data/momos.webp"
import mutterkachodi from "../../assets/images/data/mutterkachodi2.jpg";
import pasta from "../../assets/images/data/pasta.jpg"
import pavbhaji from "../../assets/images/data/pavbhaji.jpeg"
import poha from "../../assets/images/data/poha.webp"
import samosa from "../../assets/images/data/samosa.jpg"
import sattu from "../../assets/images/data/sattu.webp"
import springroll from "../../assets/images/data/springroll.jpg"
import vada from "../../assets/images/data/vada.jpg"
import vadapav from "../../assets/images/data/vadapav.jpg"

export const card2Data = [
    {
      image: littichokha,
      price: "0",
      title: "Litti chokha",
      // description: "Interdum iusto pulvinar consequuntur augue optio faguroso otto."
    },
    
    {
        image: badamMilk,
        price: "0",
        title: "Badam Milk",
        // description: "Interdum iusto pulvinar consequuntur augue optio faguroso otto."
      },
      {
        image: burger,
        price: "0",
        title: "Burger",
        // description: "Interdum iusto pulvinar consequuntur augue optio faguroso otto."
      },
 
      {
        image: cholekulche,
        price: "0",
        title: "Chole Kulche",
        // description: "Interdum iusto pulvinar consequuntur augue optio faguroso otto."
      },
      {
        image: coldcoffee,
        price: "0",
        title: "Cold coffee",
        // description: "Interdum iusto pulvinar consequuntur augue optio faguroso otto."
      },
      {
        image: grillsandwich,
        price: "0",
        title: "Grill Snadwiches",
        // description: "Interdum iusto pulvinar consequuntur augue optio faguroso otto."
      },
      {
        image: idli,
        price: "0",
        title: "Idli",
        // description: "Interdum iusto pulvinar consequuntur augue optio faguroso otto."
      },
      {
        image: lassi,
        price: "0",
        title: "Lassi",
        // description: "Interdum iusto pulvinar consequuntur augue optio faguroso otto."
      },
      {
        image: makhanakheer,
        price: "0",
        title: "Makhana Kheer",
        // description: "Interdum iusto pulvinar consequuntur augue optio faguroso otto."
      },
      {
        image: momos,
        price: "0",
        title: "Mommos",
        // description: "Interdum iusto pulvinar consequuntur augue optio faguroso otto."
      },
      {
        image: mutterkachodi,
        price: "0",
        title: "Mutter kacuari",
        // description: "Interdum iusto pulvinar consequuntur augue optio faguroso otto."
      },
      {
        image: pasta,
        price: "0",
        title: "Pasta",
        // description: "Interdum iusto pulvinar consequuntur augue optio faguroso otto."
      },
      {
        image: pavbhaji,
        price: "0",
        title: "Paw bhaji",
        // description: "Interdum iusto pulvinar consequuntur augue optio faguroso otto."
      },
      {
        image: poha,
        price: "0",
        title: "Poha",
        // description: "Interdum iusto pulvinar consequuntur augue optio faguroso otto."
      },
      {
        image: samosa,
        price: "0",
        title: "Samosa",
        // description: "Interdum iusto pulvinar consequuntur augue optio faguroso otto."
      },
      {
        image: sattu,
        price: "0",
        title: "Sattu",
        // description: "Interdum iusto pulvinar consequuntur augue optio faguroso otto."
      },
      {
        image: springroll,
        price: "0",
        title: "Spring role",
        // description: "Interdum iusto pulvinar consequuntur augue optio faguroso otto."
      },
      {
        image: vada,
        price: "0",
        title: "Vada",
        // description: "Interdum iusto pulvinar consequuntur augue optio faguroso otto."
      },
      {
        image: vadapav,
        price: "0",
        title: "Vada Paw",
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

