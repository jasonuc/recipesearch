import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";

function CardsSection({ results }) {
    const [renderedResults, setRenderedResults] = useState([]);
    
    useEffect(() => {
        console.log("Results received:", results);
        // Whenever the results prop changes, update the renderedResults state
        setRenderedResults(results);
    }, [results]);


    return (
        <div className='w-full flex-grow mt-3 flex flex-col items-center justify-stretch lg:flex-row lg:flex-wrap lg:justify-between gap-y-4 mb-2'>
            {renderedResults && renderedResults.map( (recipe, index) =>
                <RecipeCard key={index} name={recipe.name} ingredients={recipe.ingredients} instructions={recipe.instructions} image={recipe.image} />
            )}
        </div>
    )
}

export default CardsSection;