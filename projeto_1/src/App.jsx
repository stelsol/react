import "./App.css";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [valor, setValor] = useState("");
  const [resultado, setResultado] = useState("");

  function Gerar() {
    let num = Number(valor);
    let contador = " ";

    for (let i = 0; i <= num; i++) {
      // console.log(contador);
      contador += i + " ";
    }
    setResultado(contador);
  }

  return (
    <main className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <div className="bg-purple-600">
        <input
          type="text"
          name="valor"
          id="valor"
          placeholder="Digite um numero"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />
        <button id="botao" className="bg-purple-950" onClick={Gerar}>
          Gerar
        </button>
        <div id="resultado" className="bg-purple-100">
          {resultado}
        </div>
      </div>
    </main>
  );
}

export default App;
