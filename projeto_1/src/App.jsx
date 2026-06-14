import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Form from "./components/Form";
import Section from "./components/Section";

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
    <div className="bg-gray-100 font-sans min-h-screen flex items-center justify-center p-4">
      <Main>
        <Header>
          <Form valor={valor} setValor={setValor} Gerar={Gerar} />
          <Section resultado={resultado} />
        </Header>
      </Main>
    </div>
  );
}

export default App;
