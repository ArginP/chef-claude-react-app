import { useState } from "react";
import SuggestedRecipe from "./SuggestedRecipe.jsx";
import GenerateRecipe from "./GenerateRecipe.jsx";
import MainForm from "./MainForm.jsx";

export default function MainApp() {
    const [ingredients, setIngredients] = useState([]);
    const [isRecipeShown, setIsRecipeShown] = useState(false);

    function addIngredient(formData) {

        const newIngredient = formData.get("ingredient");
        if (newIngredient.trim()) {
            setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
        }
    }

    function toggleRecipeShown() {
        isRecipeShown ? setIsRecipeShown(false) : setIsRecipeShown(true);
    }

    return (
        <>
            <main className="main">
                <div className="main-container">

                    <MainForm handleClick={addIngredient} />

                    {!!ingredients.length && <section className="ingredients-container">
                        <h2>Ингридиенты в наличии:</h2>
                        <ul className="ingredients-list">
                        {ingredients.map((ingredient) => (
                            <li className="ingredient" key={ingredient}>{ingredient}</li>
                        ))}
                        </ul>
                    </section>}

                    {ingredients.length > 3 && <GenerateRecipe handleClick={toggleRecipeShown} />}

                    {!!isRecipeShown && <SuggestedRecipe/>}

                </div>
            </main>
        </>
    )
}