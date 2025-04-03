export default function MainApp() {
    return (
        <>
            <main className="main">
                <div className="main-container">
                    <form className="main-form">
                        <input
                            className="main-form-input"
                            type="text"
                            placeholder="Например: Мука..."
                            aria-label="Добавить ингридиент"
                        />
                        <button className="main-form-btn" type="submit">+ Ингридиент</button>
                    </form>
                </div>
            </main>
        </>
    )
}