export default function IngredientsList(props) {
    return (
        <>
            <section className="ingredients-container">
                <h2>Ингридиенты в наличии:</h2>
                <ul className="ingredients-list">
                    {props.ingredients.map((ingredient) => (
                        <li className="ingredient" key={ingredient}>{ingredient}</li>
                    ))}
                </ul>
            </section>
        </>
    )
}