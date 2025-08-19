import { useState } from 'react'

function Components() {
    
    const [contagem, setContagem] = useState(0)
    function adicionar() {
        setContagem(contagem + 1)
    }
    function subtrair() {
        setContagem(contagem - 1)
    }

    return (
        <>
            <h1>{contagem}</h1>
            <button onClick={subtrair}>-</button>
            <button onClick={adicionar}>+</button>
        </>
    )
}

export default Components