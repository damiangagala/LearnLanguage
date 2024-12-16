import { useLoaderData } from "react-router-dom";

function GrammarList() {
  const { data } = useLoaderData();

  return (
    <main className="flex flex-col lg:flex-row flex-wrap justify-center items-center gap-10 mt-10 ">
      {data.map((value) => (
        <div
          className="max-w-4xl border-4 border-muted-lavender rounded-lg p-6 bg-soft-white"
          key={value.id}
        >
          <h2 className="text-4xl text-center mb-4 font-semibold">
            {value.name}
          </h2>
          <p className="text-xl leading-relaxed">{value.description}</p>
        </div>
      ))}
    </main>
  );
}

export default GrammarList;
