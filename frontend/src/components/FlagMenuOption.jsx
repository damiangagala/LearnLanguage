import { Link } from "react-router-dom";
import { calcCords } from "../util/app";

function FlagMenuOption({ languages, radius, country, itemNumber, language }) {
  return (
    <Link to={`/${language}/words`}>
      <img
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  animate-move border-2 border-white rounded-full"
        src={`/${country}.png`}
        alt={`/${country} flag`}
        style={{
          "--move-x": `${calcCords(itemNumber, languages, radius, true)}px`,
          "--move-y": `${calcCords(itemNumber, languages, radius, false)}px`,
        }}
      />
    </Link>
  );
}

export default FlagMenuOption;
