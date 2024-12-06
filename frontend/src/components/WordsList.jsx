function WordsList({ words }) {
  return (
    <main className="flex mt-24 justify-center lg:items-center">
      <div className="p-4 flex flex-wrap text-center lg:1/2 w-1/4 bg-gray-200 ">
        <div className="flex basis-full">
          <p className="basis-1/2 sm:text-4xl text-2xl font-bold mb-5">
            Słówko
          </p>
          <p className="basis-1/2 sm:text-4xl text-2xl font-bold mb-5">
            Tłumaczenie
          </p>
        </div>

        {words.map((word) => {
          return (
            <div
              className="border-2 border-b-0 border-red-400 flex basis-full last:border-b-2 "
              key={word.id}
            >
              <p className="text-xl md:text-2xl basis-1/2 border-r-2 border-red-400">
                {word.word}
              </p>
              <p className="mb-2 text-xl md:text-2xl basis-1/2">
                {word.translation}
              </p>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default WordsList;
