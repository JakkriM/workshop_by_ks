import { RouteObject } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import { DefinedRoutes } from "./DefineRoutes";

const routes: RouteObject[] = DefinedRoutes.map((rt) => {
  if (rt.subRoute) {
    const subRoutes = rt.subRoute.map((subRt) => ({ ...subRt.routeConfig }));
    return { ...rt.routeConfig, children: [...subRoutes] } as RouteObject;
  } else {
    return { ...rt.routeConfig };
  }
});

const MainRoute: RouteObject = {
  path: "/",
  children: [
    ...routes,
    {
      path: "*",
      element: <ErrorPage />,
      errorElement: <ErrorPage />,
    },
  ],
  errorElement: <ErrorPage />,
};
export default MainRoute;
