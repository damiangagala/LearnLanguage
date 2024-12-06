function GrammarList({ grammar }) {
  return (
    <main className="flex flex-col lg:flex-row flex-wrap justify-center items-center gap-10 mt-10">
      {grammar.map((value) => (
        <div
          className="max-w-4xl border-4 border-black rounded-lg p-6"
          key={value.id}
        >
          <h2 className="text-4xl text-center mb-4">{value.name}</h2>
          <p className="text-xl leading-relaxed">{value.description}</p>
        </div>
      ))}
    </main>
  );
}

export default GrammarList;
