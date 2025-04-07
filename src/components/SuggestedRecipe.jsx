import ReactMarkdown from "react-markdown";

export default function SuggestedRecipe(props) {
    return (
        <>
            <section className="suggested-recipe-container" aria-live={"polite"}>
                <h2>Chef Claude рекомендует:</h2>
                <article className="suggested-recipe" aria-live="polite">
                    <ReactMarkdown>
                        {props.suggestedRecipe}
                    </ReactMarkdown>
                </article>
            </section>
        </>
    )
}