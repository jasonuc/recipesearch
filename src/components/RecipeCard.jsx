// import {
//     Button,
// } from "@material-tailwind/react";

// function RecipeCard( {name, ingredients, instructions, image} ) {

//     return (
//         <div className="flex flex-col mt-6 w-4/5 min-h-96 lg:w-96 lg:h-[28rem] overflow-y-hidden border-2 rounded-lg shadow-md box-border items-center p-3">
//             <img src={image} alt="Meal image" className=" h-[50%] lg:h-[40%] w-full" />
//             <h3 className="mt-5 font-Oswald text-xl md:text-2xl">{name}</h3>
//             <p>{ingredients}</p>
//             <a href={instructions}><Button>Learn More</Button></a>
//         </div>

//     )

// }


// export default RecipeCard;

import React from "react";
import { Button } from "@material-tailwind/react";

function RecipeCard({ name, ingredients, instructions, image }) {

    return (
        <div className="flex flex-col mt-6 w-[80%] lg:w-96 overflow-hidden border-2 rounded-lg shadow-lg box-border items-center">
            <img src={image} alt="Meal" className="h-40 lg:h-48 w-full object-cover" />
            <div className="mt-5 text-center px-3">
                <h3 className="font-Oswald text-xl md:text-2xl h-16 overflow-hidden mt-2">{name}</h3>
                <p className="min-h-25 md:h-[10rem] overflow-y-auto">{ingredients}</p>
            </div>
            <a href={instructions} target="_blank" rel="noopener noreferrer" className="my-5">
                <Button color="orange">Learn More</Button>
            </a>
        </div>
    );
}

export default RecipeCard;
