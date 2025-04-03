import logo from '/src/assets/Chef Claude Icon.svg'

export default function Header() {
    return (
        <>
            <header className="header">
                <nav className="header-nav">
                    <img src={logo} alt="Logo"/>
                    <span className="header-span">Chef Claude</span>
                </nav>
            </header>
        </>
    )
}