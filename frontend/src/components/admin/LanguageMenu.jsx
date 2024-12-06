import { useContext } from "react";
import { getAdminData } from "../../util/api";
import { AdminContext } from "../../contexts/AdminProvider";

function LanguageMenu() {
  const { setWords, setGrammar } = useContext(AdminContext);

  async function clickHandler(e) {
    const data = await getAdminData(e.toLowerCase());
    setWords(data.words);
    setGrammar(data.grammar);
  }

  return (
    <nav className="basis-1/6 bg-gray-300 mt-96 p-2">
      <ul>
        <li
          onClick={(e) => clickHandler(e.target.textContent)}
          className="border-2 border-black cursor-pointer"
        >
          English
        </li>
        <li onClick={(e) => clickHandler(e.target.textContent)}>Spanish</li>
        <li>Italian</li>
        <li>German</li>
      </ul>
    </nav>
  );
}

export default LanguageMenu;
