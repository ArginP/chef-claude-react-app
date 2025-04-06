export default function GenerateRecipe(props) {
    return (
        <>
            <section className="generate-recipe-container">
                <div className="generate-recipe-container-left">
                    <h3>Готовы создать рецепт?</h3>
                    <p>Сгенерировать рецепт из ингридинтов.</p>
                </div>
                <div className="generate-recipe-container-right">
                    <button className="generate-recipe-btn" onClick={props.handleClick}>Создать рецепт</button>
                </div>
            </section>
        </>
    )
}