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
      description: "Our very very own traditional dish from the Bihar and Jharkhand regions of India is now right here. "
    },
    
    {
        image: badamMilk,
        price: "0",
        title: "Badam Milk",
        description: "Nutritious and scrumptious beverage crafted from almonds, milk, and sugar. The most famous drink in India, specially at some stage in the winter months.  can be enjoyed warm or bloodless."
      },
      {
        image: burger,
        price: "0",
        title: "Burger",
        description: "Burgers are a popular fast food item such as a cooked patty of beans, lentils."
      },
 
      {
        image: cholekulche,
        price: "0",
        title: "Chole Kulche",
        description: "Chole, additionally called chana masala, a famous North Indian dish made with chickpeas cooked in a highly spiced and tangy tomato-based sauce is right here."
      },
      {
        image: coldcoffee,
        price: "0",
        title: "Cold coffee",
        description: "Refreshing and energizing beverage made with chilled coffee, milk, sugar, and ice cubes. Made particularly for the recent summer time months."
      },
      {
        image: grillsandwich,
        price: "0",
        title: "Grill Snadwiches",
        description: "Cooked the use of a grilling technique, normally on a grill, griddle, or panini press. The sandwich is assembled with various components, including bread, cheese, veggies"
      },
      {
        image: idli,
        price: "0",
        title: "Idli",
        description: "Most popular south Indian dish made from a batter of fermented rice and lentils. Steamed to make smooth, fluffy, and spongy cakes. Nutritionally, proteins, dietary fiber."
      },
      {
        image: lassi,
        price: "0",
        title: "Lassi",
        description: "Popular traditional yogurt-based totally drink from the Indian subcontinent. It is made with the aid of blending yogurt with water and spices, to create a fresh and nutritious beverage."
      },
      {
        image: makhanakheer,
        price: "0",
        title: "Makhana Kheer",
        description: "A creamy and delicious dessert made with makhana, additionally called fox nuts or lotus seeds. It is a popular dish in North India, in particular throughout festivals and special occasions. "
      },
      {
        image: momos,
        price: "0",
        title: "Mommos",
        description: "Enjoy the dumplings that originated in Tibet and are famous in many Asian countries, especially in India, Nepal, and Bhutan."
      },

      {
        image: mutterkachodi,
        price: "0",
        title: "Mutter kacuari",
        description: `"Matar Kachori" or "Matar Ki Kachori" is a famous Indian snack made with a spiced green pea filling encased in a crisp, deep-fried pastry. `
      },
      {
        image: pasta,
        price: "0",
        title: "Pasta",
        description: "Wah! Chaat, a savory snack that originated in India and is famous at some stage in South Asia. Typically consisting of a base of fried dough, along with samosas or tikkis (potato patties)."
      },
      {
        image: pavbhaji,
        price: "0",
        title: "Paw bhaji",
        description: "This most famous street meals dish from Maharashtra, has a spiced combination of mashed vegetables (bhaji) served with buttered bread rolls (pav)."
      },
      {
        image: poha,
        price: "0",
        title: "Poha",
        description: "Enjoy the most popular breakfast dish in India crafted from flattened, dehusked rice. It is mild, clean to digest, and a nutritious meal option."
      },
      {
        image: samosa,
        price: "0",
        title: "Samosa",
        description: "Yummy Indian snack which include a triangular pastry shell filled with a spicy combination, usually containing potatoes, peas, and numerous spices."
      },
      {
        image: sattu,
        price: "0",
        title: "Sattu",
        description: "Introducing our fresh and nutritious Sattu drink, a conventional Indian beverage, it truly is best for staying cool and energized!"
      },
      {
        image: springroll,
        price: "0",
        title: "Spring role",
        description: "Spring rolls, a famous Asian appetizer which includes a filling, frequently made with vegetables, paneer, or cheese rolled inside a thin pastry wrapper after which deep-fried or on occasion served clean. "
      },
      {
        image: vada,
        price: "0",
        title: "Vada",
        description: "South Indian snack made from a batter of lentils or gram flour, with spices like cumin, curry leaves, and green chilies, and deep-fried until crispy."
      },
      {
        image: vadapav,
        price: "0",
        title: "Vada Paw",
        description: "Wow! Vada pav! Mouth watering popular street meals from the nation of Maharashtra in India. Spicy potato fritter (vada) sandwiched among a pav, which is a small, tender bread roll."
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
                className="transition h-[300px] duration-700 group-hover:scale-150 filter blur-[1px] rounded"
                src={card2.image}
                alt=""
              />
            </div> 
            <div className="mx-auto  px-4 py-3 items-center absolute top-0  h-full w-full mt-0 group ">
              <div className="flex justify-center ">
              
             
             <div className="hidden group-hover:block text-center items-center ">
             <p className=" rounded text-xl bg-gray-100 font-semibold m-auto  text-center text-black py-1 relative w-[100px] top-[-0px]">
                  {card2.price} Rs
                </p>
             <div className="flex justify-center items-center">
              <div>
              <h1 className="text-xl min-w-[150px] w-max p-1 font-semibol mt-5 text-center rounded-sm bg-opacity-80 bg-gray-500 text-white font-bold ">
                {card2.title}
              </h1>
          
              </div>
             </div>
              
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

