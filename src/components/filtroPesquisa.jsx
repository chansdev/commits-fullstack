import { useState } from 'react'

function FiltroBusca() {
    
    const [busca, setBusca] = useState("")
    function setarBusca(event) {
        setBusca(event.target.value)
    }

    return (
        <>
            <form action="./">
                <input type="text" id="busca" onInput={setarBusca}/>
            </form>

            <h2>A procurar por: {busca}</h2>
        </>
    )
}

export default FiltroBusca