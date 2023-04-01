import './Card.css';

const Card = ()=> {
    return (
        <div className="card">
            <h1 className="cart-title">Pacote Standart</h1>
            <ul className="card-ofer">
                <li>Quarto Standart</li>
                <li>chek in de 10h as 13h</li>
                <li>Piscina e sauna</li>
            </ul>
            <div className="price"><h3>R$ 280,00 Diária</h3> <h2>Reserve agora</h2></div>
        </div>
        
    )
}

export default Card