import { useRoutes } from "react-router-dom";
import MainRoute from "./MainRoute";

const RouterElement = () => {
  const element = useRoutes([MainRoute]);
  return element;
};

export default RouterElement;
