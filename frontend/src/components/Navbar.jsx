import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import WordsQuizModal from "./WordsQuizModal";

function Navbar() {
  const location = useLocation().pathname;
  const newPath = location.includes("words")
    ? location.replace("words", "grammar")
    : location.replace("grammar", "words");

  const dialogRef = useRef();

  function openModal() {
    dialogRef.current.showModal();
  }

  return (
    <nav className="flex gap-2 justify-center lg:justify-end">
      <div
        className="bg-[#8785A2] rounded-md py-2 m-4 px-12 text-zinc-50 font-semibold text-2xl h-fit"
        onClick={openModal}
      >
        Test
      </div>
      <WordsQuizModal ref={dialogRef} />
      <Link to={newPath}>
        <div className="bg-[#8785A2] rounded-md py-2 m-4 px-12 text-zinc-50 font-semibold text-2xl h-fit">
          {location.includes("words") ? "Gramatyka" : "Słówka"}
        </div>
      </Link>
    </nav>
  );
}

export default Navbar;
