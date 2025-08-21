import { useState } from 'react'

function Carrinho() {
  const [items, setItems] = useState(['livro', 'chapeu', 'cabeça', 'onibus', 'terço']);
  const [valorInput, setValorInput] = useState('');

  function setarValorInput(event) {
    setValorInput(event.target.value);
  }

  function addItem() {
    if (valorInput.trim() !== '') {
      setItems([...items, valorInput]);
      setValorInput('');
    }
  }

  return (
    <>
      <input 
        type="text" 
        value={valorInput} 
        onChange={setarValorInput} 
      />
      <button onClick={addItem}>Add</button>
      <ul>
        {items.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default Carrinho;
