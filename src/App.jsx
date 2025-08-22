import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Pesquisa from "./components/Pesquisa.jsx";

function App() {
  const [ultilizadorLogado, setUltilizador] = useState(null);
  const [nome, setNome] = useState("");

  function setarNome(event) {
    const nome = event.target.value;

    setNome(nome);
  }

  function login() {
    setUltilizador(nome);
  }
  function logout() {
    setUltilizador(null);
  }

  function mensagem() {
    if (ultilizadorLogado != "" && ultilizadorLogado != null) {
      return <p>Olá, {nome} Como vai?</p>;
    } else {
      return <p>Você está deslogado.</p>;
    }
  }

  return (
    <>
      <input
        type="text"
        placeholder="Insira seu usuario"
        onChange={setarNome}
      />
      {mensagem()}
      <button onClick={login}>Logar</button>
      <button onClick={logout}>Logout</button>
    </>
  );
}

export default App;
