function Produto(props) {
    return (
        <div>
            <h1>{props.nome}</h1>
            <p>{props.preco}</p>
            <p>{props.disponivel ? "Em estoque" : "Fora de Estoque"}</p>
        </div>
    )
}

export default Produto