import React  from "react";
import imgleft from '../../assets/images/New folder/asset35.jpeg'

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
        heading:"Express delivery",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing  amet, consectetur adipiscing elit"

    },
    {
        heading:"Express delivery",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing  amet, consectetur adipiscing elit"

    },
    {
        heading:"Express delivery",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing  amet, consectetur adipiscing elit"

    },
    {
        heading:"Express delivery",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing  amet, consectetur adipiscing elit"

    },
    {
        heading:"Express delivery",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing  amet, consectetur adipiscing elit"

    },
    {
        heading:"Express delivery",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing  amet, consectetur adipiscing elit"
    }, {
        heading:"Express delivery",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing  amet, consectetur adipiscing elit"

    },
    {
        heading:"Express delivery",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing  amet, consectetur adipiscing elit"
    },
    

     {
        heading:"Express delivery",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing  amet, consectetur adipiscing elit"

    },
    {
        heading:"Express delivery",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing  amet, consectetur adipiscing elit"
    }
]

export const MenuCard = () => {
    return (
        <>
            <div className="grid grid-cols-3 gap-5">
                {MenuData.map((MenuItem, index) => (
                    <div key={index} className="card border-b hover:border-orange-500 py-5  ">
                     <h1 className="text-gray-600 font-semibold text-xl">{MenuItem.heading}</h1>

                     <div className="hover:ml-[5px] transition-[700]">
                        <p className="text-gray-500" >{MenuItem.desc}</p>
                     </div>
                    </div>
                ))}
            </div>
        </>
    );
};

