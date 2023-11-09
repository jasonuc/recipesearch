/* eslint-disable react/prop-types */

import { Button } from "@material-tailwind/react";

function RecipeCard({ name, ingredients, instructions, image, cuisineType, mealType }) {

    return (
        <div className="flex flex-col mt-6 w-[80%] lg:w-96 overflow-hidden border-4 rounded-lg shadow-lg box-border items-center shadow-red-300 snap-always snap-center font-sometypeMono">
            <img src={image} alt="Meal Image" className="h-40 lg:h-48 w-full object-cover border-b-2 border-dotted" />
            <div className="mt-5 text-center px-3">
                <h3 className="font-Oswald text-xl md:text-2xl overflow-hidden my-2">{name}</h3>
                {(cuisineType && mealType) && <h3 className=" text-gray-500 font-thin text-xs md:text-sm uppercase mb-3 italic pb-2 border-b-2 border-gray-200 border-opacity-35">{cuisineType} | {mealType}</h3>}
                <p className="min-h-25 md:h-[10rem] font-medium overflow-y-auto text-left scrollbar scrollbar-w-[4px] scrollbar-thumb-red-300 scrollbar-thumb-rounded-lg">{ingredients.join(", ")}</p>
            </div>
            <a href={instructions} target="_blank" rel="noopener noreferrer" className="my-5">
                <Button color="orange" className="font-sometypeMono">Learn More</Button>
            </a>
        </div>
    );
}

export default RecipeCard;
