import { useRouteError } from "react-router-dom";

function Error() {
  let error = useRouteError();
  return <div>{error.message}</div>;
}

export default Error;
