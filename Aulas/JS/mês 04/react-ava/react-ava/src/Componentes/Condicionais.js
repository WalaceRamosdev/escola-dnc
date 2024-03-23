function Condicionais() {

    const Mercado = [
        {id:1, name: 'Arroz', price: 37.50},
        {id:2, name: 'Feijão', price: 8.99},
        {id:3, name: 'Café', price: 17.99},
        {id:4, name: 'Açúcar', price: 4.95}
    ]

    return(
        <div>
            {Mercado.length >=1 ?
            (
                <p>Você possui itens na lista</p>
            ):(
                <p>Você não tem itens na sua lista</p>
            )
            }
        </div>
    )
}

export default Condicionais