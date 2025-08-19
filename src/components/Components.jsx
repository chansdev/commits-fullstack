import { useState } from 'react'

function Components() {
    
    const [modo, setModo] = useState("whiteMode")
    function setMode() {
       setModo(modo == "whiteMode" ? "darkMode" : "whiteMode")
       console.log("modo mudado para " + modo)
    }

    return (
        <div className={modo}>
            <h1>Teste de Modo</h1>
            <button onClick={setMode}>Mudar Modo</button>
        </div>
    )
}

export default Components