import { getAdminData, logout } from "../../util/api";
import { AdminContext } from "../../contexts/AdminProvider";
import LanguageMenuOption from "./LanguageMenuOption";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

function LanguageMenu() {
  const { setWords, setGrammar } = useContext(AdminContext);

  async function clickHandler(languageQuery) {
    //Pamiętaj żeby podmienić nazwy w bazie danych na polskie, żeby pozbyć się tego languageQuery
    const data = await getAdminData(languageQuery);
    setWords(data.words);
    setGrammar(data.grammar);
  }

  async function logoutHandler() {
    await logout();
    <Navigate to="/login" replace />;
  }

  return (
    <nav className="basis-60 shrink-0 bg-muted-lavender text-soft-white font-semibold text-lg">
      <button onClick={logoutHandler} className="border-2 border-black ">
        logout
      </button>
      <ul>
        <LanguageMenuOption
          language={"Angielski"}
          image={"united-kingdom"}
          onClickHandler={clickHandler}
          languageQuery={"english"}
        />
        <LanguageMenuOption
          language={"Hiszpański"}
          image={"spain"}
          onClickHandler={clickHandler}
          languageQuery={"spanish"}
        />
        {/* <LanguageMenuOption language={"Włoski"} />
        <LanguageMenuOption language={"Niemiecki"} /> */}
      </ul>
    </nav>
  );
}

export default LanguageMenu;
