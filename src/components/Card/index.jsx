import './Card.css';

const Card = ({nome, itens, preco, cor})=> {
    const css = {backgroundColor: cor}
    console.log(itens)
    return (
        <div className="card" style={css}>
            <h1 className="cart-title">{nome}</h1>
            <ul className="card-ofer">
                {itens.map(item => <li>{item}</li>)}
                
            </ul>
            <div className="price"><h3>R$ {preco} Diária</h3> <h2>Reserve agora</h2></div>
        </div>
        
    )
}

export default Card