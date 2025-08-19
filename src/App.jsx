import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Produto from './components/Produto.jsx'

function App() {

  return (
    <>
    <Produto nome="Arroz" preco="R$ 1,00" disponivel={true} />
    </>
  )
}

export default App
