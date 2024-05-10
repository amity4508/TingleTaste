import React  from "react";
import imgleft from '../../assets/images/asset35.jpeg'


export const Menu = () =>{
    
    return(
        <>
         <div className="container MenuC mx-auto px-8 mt-10 mb-10 ">
                <p className="text-center font-semibold text-2xl text-gray-600 py-5">List of available plates</p>
                <h1 className="text-center text-4xl text-gray-800 font-bold">THE MENU</h1>
                <div className="flex justify-center mt-6">
                <div>
                <DownloadPdf/>
                </div>
                </div>
                
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
        price:"60"

    },
    {
        heading:"badamMilk",
        desc:"Nutritious and scrumptious beverage crafted from almonds, milk, and sugar.",
        price:"40"
    },
    {
        heading:"burger",
        desc:"Burgers are a popular fast food item such as a cooked patty of beans, lentils, or vegetables, served in a sliced bread roll referred to as a bun. ",
        price:"60"

    },
    {
        heading:"cholekulche",
        desc:"Chole, additionally called chana masala, a famous North Indian dish made with chickpeas cooked in a highly spiced and tangy tomato-based sauce is right here.",
        price:"60"

    },
    {
        heading:"coldcoffee",
        desc:"Refreshing and energizing beverage made with chilled coffee, milk, sugar, and ice cubes. Made particularly for the recent summer time months.",
        price:"40"
    },
    {
        heading:"grillsandwich",
        desc:"Cooked the use of a grilling technique, normally on a grill, griddle, or panini press. The sandwich is assembled with various components, including bread, cheese, veggies",
        price:"80"
    }, 
    {
        heading:"idli",
        desc:"Most popular south Indian dish made from a batter of fermented rice and lentils. Steamed to make smooth, fluffy, and spongy cakes. Nutritionally, proteins, dietary fiber.",
        price:"60"
    },
    

     {
        heading:"lassi",
        desc:"Popular traditional yogurt-based totally drink from the Indian subcontinent. It is made with the aid of blending yogurt with water and spices, to create a fresh and nutritious beverage.",
        price:"40"

    },
    {
        heading:"makhanakheer",
        desc:"A creamy and delicious dessert made with makhana, additionally called fox nuts or lotus seeds. It is a popular dish in North India, in particular throughout festivals and special occasions.",
        price:"40"
    },
    {
        heading:"momos",
        desc:"Enjoy the dumplings that originated in Tibet and are famous in many Asian countries, especially in India, Nepal, and Bhutan",
        price:"60"
    },
    {
        heading:"mutterkachodi",
        desc:`"Matar Kachori" or "Matar Ki Kachori" is a famous Indian snack made with a spiced green pea filling encased in a crisp, deep-fried pastry.`,
        price:"50"
    },
    {
        heading:"pasta",
        desc:"Wah! Chaat, a savory snack that originated in India and is famous at some stage in South Asia. Typically consisting of a base of fried dough, along with samosas or tikkis (potato patties).",
        price:"80"
    },
    {
        heading:"poha",
        desc:"Enjoy the most popular breakfast dish in India crafted from flattened, dehusked rice. It is mild, clean to digest, and a nutritious meal option.",
        price:"50"
    },
    {
        heading:"samosa",
        desc:"Yummy Indian snack which include a triangular pastry shell filled with a spicy combination, usually containing potatoes, peas, and numerous spices.",
        price:"30"
    },
    {
        heading:"sattu",
        desc:"Introducing our fresh and nutritious Sattu drink, a conventional Indian beverage, it truly is best for staying cool and energized!",
        price:"40"
    },
    {
        heading:"springroll",
        desc:"Spring rolls, a famous Asian appetizer which includes a filling, frequently made with vegetables, paneer, or cheese rolled inside a thin pastry wrapper after which deep-fried or on occasion served clean.",
        price:"60"
    },
    {
        heading:"vada",
        desc:"South Indian snack made from a batter of lentils or gram flour, with spices like cumin, curry leaves, and green chilies, and deep-fried until crispy.",
        price:"0"
    },
    {
        heading:"vadapav",
        desc:"Wow! Vada pav! Mouth watering popular street meals from the nation of Maharashtra in India. Spicy potato fritter (vada) sandwiched among a pav, which is a small, tender bread roll.",
        price:"60"
    },
    {
        heading:"pavbhaji",
        desc:"This most famous street meals dish from Maharashtra, has a spiced combination of mashed vegetables (bhaji) served with buttered bread rolls (pav)",
        price:"60"
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

// download pdf

export function DownloadPdf() {
    const handleLabelClick = () => {
        const pdfUrlpath = process.env.PUBLIC_URL + '/tingletastemenu.pdf';
        downloadPdf(pdfUrlpath);
    };

    const downloadPdf = (url) => {
        const path = document.createElement('a');
        path.href = url;
        path.setAttribute('download', 'tingletastemenu.pdf');
        document.body.appendChild(path);
        path.click();
        document.body.removeChild(path); 
    };

    return (
        <label className="custom-file-label bg-orange-500 p-2 rounded-md font-semibold text-white hover:bg-gray-500 hover:text-orange-500" onClick={handleLabelClick}>Click to Download PDF</label>
    );
}


