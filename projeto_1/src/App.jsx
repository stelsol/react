import "./App.css";

function App() {
  const nome = "Stella";
  const estilo = { color: "blue", fontSize: "18px" };
  return (
    <div className="app">
      <h2 style={estilo}>{nome.toUpperCase()}</h2>
      <p>Bem-vindo ao React!</p>
    </div>
  );
}

export default App;
