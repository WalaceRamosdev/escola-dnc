function Listas2 () {
    
    const nomes = ['Walace', 'Paloma', 'Gabriel']

    return (
        <>
            <h1>
                Minha familia
            </h1>

            {nomes.map((nomes) => (<p key={nomes.indexOf}>{nomes}</p>))}
        </>
    )
}

export default Lista2