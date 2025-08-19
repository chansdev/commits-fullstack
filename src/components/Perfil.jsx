function Perfil(props) {
    return (
        <div className="card-perfil">
            <h1>{props.nome}</h1>
            <p>{props.profissao}</p>
        </div>
    )
}

export default Perfil