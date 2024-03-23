import { useState } from "react"

function EstadoCond(){
    const [requisito, setRequisito] = useState(false)
    function Validacao(){
        setRequisito(true)
    }
    return(
        <>
        <button onClick={Validacao}>
            Validar
        </button>
        {requisito === true &&}
        <p>Você está validado</p>
        </>
    )
}

export default EstadoCond