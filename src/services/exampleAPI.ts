import axios from "axios";
import { IUserData } from "../interfaces/user";

const baseUrl = import.meta.env.VITE_API_URL;

class ExampleAPI {
  public getAllUsers(): Promise<IUserData[]> {
    const result = axios({
      url: `${baseUrl}/users`,
      method: "GET",
    })
      .then((res) => {
        // console.log(res);
        return res.data;
      })
      .catch((error) => {
        console.log(":: Error ::");
        console.log(error);
      });
    return result;
  }
}

const exampleAPI = new ExampleAPI();
export default exampleAPI;
