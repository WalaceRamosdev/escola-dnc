function Lista(){

    const Mercado = [
        {id:1, name: 'Arroz', price: 37.50},
        {id:2, name: 'Feijão', price: 8.99},
        {id:3, name: 'Café', price: 17.99},
        {id:4, name: 'Açúcar', price: 4.95}
    ]

    return (
        <div>
            <h1>
                Renderização de Listas
            </h1>
            {Mercado.map((Mercado) => (
                <p key={Mercado.id} >
                    {Mercado.name}
                </p>
            ))}
        </div>
    )
}

export default Lista