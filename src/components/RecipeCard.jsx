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
