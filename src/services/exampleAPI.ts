import { IUserData } from "../interfaces/user";
import api from "./apiHelper";
import { IBaseResponse } from "../interfaces/service";

const apiPath = "users";

class ExampleAPI {
  public getAllUsers(): Promise<IBaseResponse<IUserData[]>> {
    return api.GET<IUserData[]>(apiPath) as Promise<IBaseResponse<IUserData[]>>;
  }
}

const exampleAPI = new ExampleAPI();
export default exampleAPI;
