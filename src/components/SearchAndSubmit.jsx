/* eslint-disable react/prop-types */
import { Input, Button } from "@material-tailwind/react";
import fetchRecipes from "../services/RecipeSearch";

function SearchAndSubmit({ input, setInput, setResults }) {

    function handleChange(event) {
        setInput(event.target.value)
    }

    function handleClick() {
        fetchRecipes(input).then(
            hits => {
                setResults(hits)
            }
        )
        setInput("")
    }

    return (
        <div className="relative flex w-full max-w-[24rem] 
        md:w-1/2 rounded-lg bg-white italic font-Agbalumo box-border text-blue-gray-100">
            <Input
                type="email"
                label="Enter meal name here..."
                value={input}
                onChange={handleChange}
                color="orange"
                className="pr-20 italic font-sometypeMono"
                containerProps={{
                    className: "min-w-0",
                }}
                />
            <Button
                size="sm"
                disabled={!input}
                className="!absolute right-1 top-1 rounded bg-melon"
                onClick={handleClick}>
                Search
            </Button>
        </div>
    )
}

export default SearchAndSubmit;