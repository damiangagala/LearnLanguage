import { useContext } from "react";
import LanguageMenu from "../components/admin/LanguageMenu";
import { AdminContext } from "../contexts/AdminProvider";
import AdminWordsListItem from "../components/admin/AdminWordsListItem";
import AdminGrammarListItem from "../components/admin/AdminGrammarListItem";

function Admin() {
  const { setSearch, search, words, grammar } = useContext(AdminContext);

  return (
    <div className="flex min-h-screen w-full">
      <LanguageMenu />

      <main className=" py-2 px-4 bg-blush-pink">
        <div className="flex gap-10">
          <div className="basis-1/6 shrink-0">
            <input
              className="border-2 border-black"
              type="search"
              name="wordSearch"
              onChange={(e) => setSearch(e.target.value)}
            />
            {words.length !== 0 &&
              words.map((word, index) => {
                return search === "" || word.word.includes(search) ? (
                  <AdminWordsListItem key={word.id} word={word} index={index} />
                ) : (
                  ""
                );
              })}
          </div>
          <div>
            {grammar
              ? grammar.map((time) => (
                  <AdminGrammarListItem key={time.id} time={time} />
                ))
              : ""}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Admin;
