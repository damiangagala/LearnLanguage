import { useLoaderData } from "react-router-dom";

function WordsList() {
  const { data } = useLoaderData();

  return (
    <main className="mt-24 bg-[#F6F6F6] mx-auto w-3/4 lg:w-1/3 text-center ">
      <table className="text-center w-full ">
        <thead>
          <tr className="bg-[#8785A2] text-zinc-50 ">
            <th className="sm:text-4xl text-2xl font-semibold mb-5 py-4 rounded-tl-md">
              Słówko
            </th>
            <th className="sm:text-4xl text-2xl font-semibold mb-5 py-4 rounded-tr-md">
              Tłumaczenie
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((word) => {
            return (
              <tr key={word.id} className="odd:bg-[#E0E0E0]">
                <td className=" text-lg p-1">{word.word}</td>
                <td className="text-lg p-2 ">{word.translation}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
}

export default WordsList;
