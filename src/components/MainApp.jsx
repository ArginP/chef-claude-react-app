import { useEffect, useRef, useState } from "react";
import SuggestedRecipe from "./SuggestedRecipe.jsx";
import GenerateRecipe from "./GenerateRecipe.jsx";
import MainForm from "./MainForm.jsx";
import IngredientsList from "./IngredientsList.jsx";
import { getRecipeFromMistral } from "./api.js"

export default function MainApp() {
    const [ingredients, setIngredients] = useState(["Макароны", "Томаты", "Сыр", "Масло"]);
    const [suggestedRecipe, setSuggestedRecipe] = useState(null);
    const recipeSection = useRef(null);

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient");
        if (newIngredient.trim()) {
            setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
        }
    }

    function getRecipe() {
        console.log("sent a recipe");
        getRecipeFromMistral(ingredients)
            .then(response => {
                setSuggestedRecipe(response);
                console.log("got a recipe");
                console.log(response);
            })
            .catch(error => console.log(error));
    }

    useEffect(() => {
        if (suggestedRecipe && recipeSection.current) {
            recipeSection.current.scrollIntoView({ behavior: "smooth" });
        }

    }, [suggestedRecipe])

    return (
        <>
            <main className="main">
                <div className="main-container">

                    <MainForm handleClick={addIngredient} />

                    {!!ingredients.length && <IngredientsList
                        ingredients={ingredients}
                    />}

                    {ingredients.length > 3 &&
                        <GenerateRecipe
                            ref={recipeSection}
                            handleClick={getRecipe}
                        />}

                    {!!suggestedRecipe && <SuggestedRecipe
                        suggestedRecipe={suggestedRecipe}
                    />}

                </div>
            </main>
        </>
    )
}