function Form({ valor, setValor, Gerar }) {
  return (
    <>
      <form
        id="form-sequencia"
        onSubmit={(e) => e.preventDefault()}
        className="space-y-4"
      >
        <div>
          <label
            htmlFor="numero-limite"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Informe um número inteiro positivo:
          </label>
          <input
            type="number"
            id="numero-limite"
            min="1"
            step="1"
            required
            placeholder="Ex: 7"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <button
          type="button"
          id="btn-gerar"
          onClick={Gerar}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
        >
          Gerar Números Anteriores
        </button>
      </form>
    </>
  );
}
export default Form;
