import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import WordsList from "../components/WordsList";
import GrammarList from "../components/GrammarList";

function Words() {
  const { data } = useLoaderData();
  const { type } = useParams();

  return (
    <>
      {data.length !== 0 ? (
        <>
          <Navbar />
          {type === "words" ? (
            <WordsList words={data} />
          ) : type === "grammar" ? (
            <GrammarList grammar={data} />
          ) : (
            "Page not Found"
          )}
        </>
      ) : (
        "No data found"
      )}
    </>
  );
}

export default Words;
