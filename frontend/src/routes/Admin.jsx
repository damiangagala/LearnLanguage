import { useContext } from "react";
import AdminWordsList from "../components/admin/adminWordsList";
import LanguageMenu from "../components/admin/LanguageMenu";
import { AdminContext } from "../contexts/AdminProvider";

function Admin() {
  const { setSearch, search, words, grammar } = useContext(AdminContext);
  return (
    <div className="flex">
      <LanguageMenu />

      <div className="flex basis-full bg-gray-500 mt-72">
        <div className="basis-1/2">
          <input
            className="border-2 border-black"
            type="search"
            name="wordSearch"
            onChange={(e) => setSearch(e.target.value)}
          />
          {words.length !== 0 &&
            words.map((word, index) => {
              return search === "" || word.word.includes(search) ? (
                <AdminWordsList key={word.id} word={word} index={index} />
              ) : (
                ""
              );
            })}
        </div>

        <p className="basis-1/2">{grammar[0]?.name}</p>
      </div>
    </div>
  );
}

export default Admin;
