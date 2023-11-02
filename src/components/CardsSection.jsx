/* eslint-disable react/prop-types */
import RecipeCard from "./RecipeCard";

function CardsSection({ results }) {

    return (
        <div className='w-full flex-grow mt-3 flex flex-col items-center justify-stretch lg:flex-row lg:flex-wrap lg:justify-between gap-y-4 mb-2'>
            {results && results.map( ({recipe}, index) =>
                <RecipeCard key={index} name={recipe.label} ingredients={recipe.ingredientLines} instructions={recipe.url} image={recipe.image} cuisineType={recipe.cuisineType} mealType={recipe.mealType} />
            )}
        </div>
    )
}

export default CardsSection;