import { useState } from 'react'

function Components() {
    
    const [nome, setNome] = useState("")
    const [mensagem, setMensagem] = useState("")

    function setarNome(event) {
        setNome(event.target.value)
    }

    function setarMensagem(event) {
        setMensagem(event.target.value)
    }

    return (
        <>
            <form action="./">
                <input type="text" id="nome" onInput={setarNome}/>
                <input type="text" id="mensagem" onInput={setarMensagem}/>
            </form>
            <h1>{nome}</h1>
            <p>{mensagem}</p>
        </>
    )
}

export default Components