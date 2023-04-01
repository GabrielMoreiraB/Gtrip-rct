import './Header.css';

const Header = () => {
    return (
        <header>
            <div className="header-logo">
                <img src="/img/G.png" alt="" />
                <h1>Trip</h1>
            </div>
            <div className="navibar">
                <h2 className="pac">Pacotes</h2>
                <h2 className="fal">Fale Conosco</h2>
            </div>
            
        </header>
    )
}

export default Header