import FlagMenuOption from "../components/FlagMenuOption";

function Home() {
  const languages = 10;
  const radius = 190;

  return (
    <div className="flex h-screen justify-center items-center">
      <nav className="relative h-[500px] w-[500px]">
        <img
          className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 w-64 h-64  border-2 border-white rounded-full"
          src="/earth.png"
          alt="Planet earth icon"
        />
        <FlagMenuOption
          languages={languages}
          radius={radius}
          country={"spain"}
          itemNumber={0}
          language={"spanish"}
        />
        <FlagMenuOption
          languages={languages}
          radius={radius}
          country={"united-kingdom"}
          itemNumber={1}
          language={"english"}
        />
      </nav>
    </div>
  );
}

export default Home;
