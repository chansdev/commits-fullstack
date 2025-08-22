import { useState } from 'react'

function ListaTarefas() {
    const listaTarefas = ['Estudar React', 'Fazer o PI', 'Tomar café']

  return (
    <>
    <ul>
      {listaTarefas.map(item => {
        return <li key={item}>{item}</li>
      })}
    </ul>
    </>
  );
}

export default ListaTarefas;
