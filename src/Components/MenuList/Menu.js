import React  from "react";
import imgleft from '../../assets/images/asset35.jpeg'

export const Menu = () =>{
    
    return(
        <>
         <div className="container MenuC mx-auto px-8 mt-10 mb-10 ">
                <p className="text-center font-semibold text-2xl text-gray-600 py-5">List of available plates</p>
                <h1 className="text-center text-4xl text-gray-800 font-bold">THE MENU</h1>
            </div>
        <div className="" >
           
            <div className=""   style={{
        backgroundImage: `linear-gradient(to bottom, rgba(21,40,59, 0.0), rgba(21,40,59, 0.0)), url(${imgleft})`,
        backgroundSize: "100% 100%",
        backgroundAttachment: "fixed",
      }}>
            <div className="container MenuC mx-auto px-8 mt-10 mb-10">
            <MenuCard  MenuCard ={MenuData }/>
            </div>
            </div>
        </div>

        </>
    )
}

const MenuData = [
    {
        heading:"Littichokha",
        desc:"Our very very own traditional dish from the Bihar and Jharkhand regions of India is now right here. ",
        price:"0"

    },
    {
        heading:"badamMilk",
        desc:"Nutritious and scrumptious beverage crafted from almonds, milk, and sugar.",
        price:"0"
    },
    {
        heading:"burger",
        desc:"Burgers are a popular fast food item such as a cooked patty of beans, lentils, or vegetables, served in a sliced bread roll referred to as a bun. ",
        price:"0"

    },
    {
        heading:"cholekulche",
        desc:"Chole, additionally called chana masala, a famous North Indian dish made with chickpeas cooked in a highly spiced and tangy tomato-based sauce is right here.",
        price:"0"

    },
    {
        heading:"coldcoffee",
        desc:"Refreshing and energizing beverage made with chilled coffee, milk, sugar, and ice cubes. Made particularly for the recent summer time months.",
        price:"0"

    },
    {
        heading:"grillsandwich",
        desc:"Cooked the use of a grilling technique, normally on a grill, griddle, or panini press. The sandwich is assembled with various components, including bread, cheese, veggies",
        price:"0"
    }, {
        heading:"Express delivery",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing  amet, consectetur adipiscing elit",
        price:"0"

    },
    {
        heading:"idli",
        desc:"Most popular south Indian dish made from a batter of fermented rice and lentils. Steamed to make smooth, fluffy, and spongy cakes. Nutritionally, proteins, dietary fiber.",
        price:"0"
    },
    

     {
        heading:"lassi",
        desc:"Popular traditional yogurt-based totally drink from the Indian subcontinent. It is made with the aid of blending yogurt with water and spices, to create a fresh and nutritious beverage.",
        price:"0"

    },
    {
        heading:"makhanakheer",
        desc:"A creamy and delicious dessert made with makhana, additionally called fox nuts or lotus seeds. It is a popular dish in North India, in particular throughout festivals and special occasions.",
        price:"0"
    },
    {
        heading:"momos",
        desc:"Enjoy the dumplings that originated in Tibet and are famous in many Asian countries, especially in India, Nepal, and Bhutan",
        price:"0"
    },
    {
        heading:"mutterkachodi",
        desc:`"Matar Kachori" or "Matar Ki Kachori" is a famous Indian snack made with a spiced green pea filling encased in a crisp, deep-fried pastry.`,
        price:"0"
    },
    {
        heading:"pasta",
        desc:"Wah! Chaat, a savory snack that originated in India and is famous at some stage in South Asia. Typically consisting of a base of fried dough, along with samosas or tikkis (potato patties).",
        price:"0"
    },
    {
        heading:"poha",
        desc:"Enjoy the most popular breakfast dish in India crafted from flattened, dehusked rice. It is mild, clean to digest, and a nutritious meal option.",
        price:"0"
    },
    {
        heading:"samosa",
        desc:"Yummy Indian snack which include a triangular pastry shell filled with a spicy combination, usually containing potatoes, peas, and numerous spices.",
        price:"0"
    },
    {
        heading:"sattu",
        desc:"Introducing our fresh and nutritious Sattu drink, a conventional Indian beverage, it truly is best for staying cool and energized!",
        price:"0"
    },
    {
        heading:"springroll",
        desc:"Spring rolls, a famous Asian appetizer which includes a filling, frequently made with vegetables, paneer, or cheese rolled inside a thin pastry wrapper after which deep-fried or on occasion served clean.",
        price:"0"
    },
    {
        heading:"vada",
        desc:"South Indian snack made from a batter of lentils or gram flour, with spices like cumin, curry leaves, and green chilies, and deep-fried until crispy.",
        price:"0"
    },
    {
        heading:"vadapav",
        desc:"Wow! Vada pav! Mouth watering popular street meals from the nation of Maharashtra in India. Spicy potato fritter (vada) sandwiched among a pav, which is a small, tender bread roll.",
        price:"0"
    },
]

export const MenuCard = () => {
    return (
        <>
            <div className="grid xl:grid-cols-3 max-sm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {MenuData.map((MenuItem, index) => (
                    <div key={index} className="card border-b hover:border-orange-500 py-5  ">
                   <div className="flex justify-center">
                    <div>
                    <h1 className="text-gray-600 font-semibold text-xl">{MenuItem.heading}</h1>
                     <div className="hover:ml-[5px] transition-[700]">
                        <p className="text-gray-500" >{MenuItem.desc}</p>
                     </div>
                    </div>

                    <div>
                     <div className="hover:ml-[5px] transition-[700] flex gap-1">
                        <p className="text-gray-500" >{MenuItem.price} </p>
                        <span className="text-gray-500" >&#x20B9;</span> 
                     </div>
                    </div>
                
                   </div>
                    </div>
                ))}
            </div>
        </>
    );
};

