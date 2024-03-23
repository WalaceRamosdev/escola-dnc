function Clique(){

    function Clicado(){
        window.alert("Você clicou no botão !")
    }

    function PassouPorCima(){
        window.alert("Você passou pelo botão")
    }

    return(
        <div>
            <button onClick={Clicado}>
                Clique aqui
            </button>
            <br/>
            <button onMouseEnter={PassouPorCima}>
                Teste
            </button>        
        </div>
    )
}

export default Clique