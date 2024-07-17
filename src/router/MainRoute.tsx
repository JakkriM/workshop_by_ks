import { RouteObject } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import FeaturesPage from "../pages/Features/FeaturesPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const MainRoute: RouteObject = {
  path: "/",
  children: [
    {
      path: "",
      element: <HomePage />,
    },
    {
      path: "/features",
      element: <FeaturesPage />,
    },
    {
      path: "*",
      element: <ErrorPage />,
      errorElement: <ErrorPage />,
    },
  ],
  errorElement: <ErrorPage />,
};
export default MainRoute;
