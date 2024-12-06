import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex h-screen justify-center items-center">
      <nav className="relative h-[500px] w-[500px]">
        <img
          className="absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 w-64 h-64 z-10"
          src="/earth.png"
          alt="Planet earth icon"
        />
        <Link to={"/spanish/words"}>
          <img
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 origin-center animate-move"
            src="/spain.png"
            alt="Planet earth icon"
            style={{ "--move-x": "150px", "--move-y": "150px" }}
          />
        </Link>
        <Link to={"/english/words"}>
          <img
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  origin-center animate-move"
            src="/united-kingdom.png"
            alt="Planet earth icon"
            style={{ "--move-x": "-150px", "--move-y": "-150px" }}
          />
        </Link>

        <img
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          src="/united-kingdom.png"
          alt="Planet earth icon"
        />
      </nav>
    </div>
  );
}

export default Home;
