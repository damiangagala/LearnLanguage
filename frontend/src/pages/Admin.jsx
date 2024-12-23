import { useContext } from "react";
import LanguageMenu from "../components/admin/LanguageMenu";
import { AdminContext } from "../contexts/AdminProvider";
import AdminWordsListItem from "../components/admin/AdminWordsListItem";

function Admin() {
  const { setSearch, search, words, grammar } = useContext(AdminContext);

  return (
    <div className="flex h-screen w-full">
      <LanguageMenu />

      <div className=" min-w-fit py-2 px-4 bg-blush-pink">
        <input
          className="border-2 border-black"
          type="search"
          name="wordSearch"
          onChange={(e) => setSearch(e.target.value)}
        />
        <main>
          {words.length !== 0 &&
            words.map((word, index) => {
              return search === "" || word.word.includes(search) ? (
                <AdminWordsListItem key={word.id} word={word} index={index} />
              ) : (
                ""
              );
            })}

          {/* {grammar.length !== 0 && grammar.map(time => )} */}
        </main>
      </div>
    </div>
  );
}

export default Admin;
