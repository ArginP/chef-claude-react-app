export default function MainForm(props) {
    return (
        <>
            <form className="main-form" id="form" action={props.handleClick}>
                <input
                    className="main-form-input"
                    type="text"
                    placeholder="Например: Мука..."
                    aria-label="Добавить ингридиент"
                    name="ingredient"
                />
                <button className="main-form-btn" type="submit">+ Ингридиент</button>
            </form>
        </>
    )
}