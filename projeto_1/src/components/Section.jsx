function Section({ resultado, setResultado }) {
  return (
    <>
      <section
        aria-live="polite"
        className="mt-6 p-4 bg-indigo-50 rounded-md text-gray-700"
      >
        <h2 className="font-semibold text-indigo-900 mb-2">
          Números anteriores (desde o 0):
        </h2>
        <div
          id="resultado-sequencia"
          className="font-mono text-indigo-700 break-words text-lg font-bold bg-white p-3 rounded border border-indigo-100 min-h-[44px]"
        >
          {resultado}
        </div>
      </section>
    </>
  );
}
export default Section;
