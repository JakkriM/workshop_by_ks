import { RouteObject } from "react-router-dom";

export interface IDefineRoutes {
  name: string;
  path: string;
  routeConfig: RouteObject;
  subRoute?: IDefineRoutes[];
}
