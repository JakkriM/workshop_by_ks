import { RouteObject } from "react-router-dom";
import { IDefineRoutes } from "../interfaces/route";
import HomePage from "../pages/Home/HomePage";
import FeaturesPage from "../pages/Features/FeaturesPage";
import UsersPage from "../pages/Users/UsersPage";
import DemoPage from "../pages/DemoPage/DemoPage";
import Demo1 from "../pages/DemoPage/Demo1";
import Demo2 from "../pages/DemoPage/Demo2";

const createRoute = (
  name: string,
  path: string,
  routeConfig: RouteObject,
  subRoute?: IDefineRoutes[]
): IDefineRoutes => {
  if (subRoute) {
    return {
      name,
      path,
      routeConfig: { ...routeConfig, path: path },
      subRoute,
    };
  } else {
    return { name, path, routeConfig: { ...routeConfig, path: path } };
  }
};

export const DefinedRoutes: IDefineRoutes[] = [
  createRoute("Home", "/", { element: <HomePage /> }),
  createRoute("Features", "/features", { element: <FeaturesPage /> }),
  createRoute("Users", "/users", { element: <UsersPage /> }),
  createRoute("Demo", "/demo", { element: <DemoPage /> }, [
    createRoute("Demo 1", "demo1", { element: <Demo1 /> }),
    createRoute("Demo 2", "demo2", { element: <Demo2 /> }),
  ]),
];
