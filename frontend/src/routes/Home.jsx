import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import GrammarList from "../components/GrammarList";
import WordsList from "../components/WordsList";

function Words() {
  const { type } = useParams();

  return (
    <>
      <Navbar />
      {type === "words" ? (
        <WordsList />
      ) : type === "grammar" ? (
        <GrammarList />
      ) : (
        "Page not Found"
      )}
    </>
  );
}

export default Words;
