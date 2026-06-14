function Header({ children }) {
  return (
    <>
      <header className="mb-6 text-center">
        <h1 className="text-2xl font-bold text-gray-800">
          Gerador de Sequência
        </h1>
        <p className="text-sm text-gray-500">
          Veja todos os números de zero até o número informado
        </p>
      </header>
      {children}
    </>
  );
}

export default Header;
