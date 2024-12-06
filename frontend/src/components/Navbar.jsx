import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation().pathname;
  const newPath = location.includes("words")
    ? location.replace("words", "grammar")
    : location.replace("grammar", "words");

  return (
    <nav className="flex gap-2 justify-end">
      <Link to={"/test"}>
        <div className="bg-gray-300 rounded-md py-2 m-4 px-12 text-2xl h-fit">
          Test
        </div>
      </Link>
      <Link to={newPath}>
        <div className="bg-gray-300 rounded-md py-2 m-4 px-12 text-2xl h-fit">
          {location.includes("words") ? "Gramatyka" : "Słówka"}
        </div>
      </Link>
    </nav>
  );
}

export default Navbar;
