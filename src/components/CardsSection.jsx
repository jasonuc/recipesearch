/* eslint-disable react/prop-types */
import { fetchRecipesMore } from "../services/RecipeSearch";
import RecipeCard from "./RecipeCard";
import { Button } from "@material-tailwind/react";

function CardsSection({ results, more, input, setResults, count, setCount, to, setTo, setMore }) {

    const handleClick = () => {
        setTo(prev => (prev + 5 > count) ? count : prev + 5)
        fetchRecipesMore(input, to, setMore, setCount).then(
            hits => {
                setResults(hits)
            }
        )
        
    }

    return (
        <div className="w-full flex-grow mt-3 flex flex-col justify-center items-center gap-4">
            <div className='w-full flex-grow mt-3 flex flex-col items-center justify-stretch lg:flex-row lg:flex-wrap lg:justify-between gap-y-4 mb-2'>
            {results && results.map( ({recipe}, index) =>
                <RecipeCard key={index} name={recipe.label} ingredients={recipe.ingredientLines} instructions={recipe.url} image={recipe.image} cuisineType={recipe.cuisineType} mealType={recipe.mealType} />
            )}
            </div>
            {more && <Button onClick={handleClick} className=" box-content mb-4 w-3/4 md:w-1/2 border-2 hover:border-4 hover:tracking-widest border-white text-white bg-terracotta shadow-sm hover:shadow-lg">Show More</Button>}
        </div>
    )
}

export default CardsSection;