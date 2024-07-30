import axios, { AxiosResponse } from "axios";
import { IBaseResponse } from "../interfaces/service";

const baseUrl = import.meta.env.VITE_API_URL;

export default class ApiHelper {
  static async GET<T>(apiPath: string) {
    return await axios({
      url: `${baseUrl}/${apiPath}`,
      method: "GET",
    })
      .then((res) => {
        return res && createResponse<T>(res);
      })
      .catch((error) => this.handleException(error));
  }

  static async POST<T>(apiPath: string, payload: any) {
    return await axios({
      url: `${baseUrl}/${apiPath}`,
      method: "POST",
      data: payload,
    })
      .then((res) => {
        return res && createResponse<T>(res);
      })
      .catch((error) => this.handleException(error));
  }

  static async PUT<T>(apiPath: string, payload: any) {
    return await axios({
      url: `${baseUrl}/${apiPath}`,
      method: "PUT",
      data: payload,
    })
      .then((res) => {
        return res && createResponse<T>(res);
      })
      .catch((error) => this.handleException(error));
  }

  static async DELETE<T>(apiPath: string) {
    return await axios({
      url: `${baseUrl}/${apiPath}`,
      method: "DELETE",
    })
      .then((res) => {
        return res && createResponse<T>(res);
      })
      .catch((error) => this.handleException(error));
  }

  static handleException(e: any) {
    console.log(":::::::::::::::::::");
    console.log(":: Service Error ::");
    console.log(":::::::::::::::::::");
    console.log(e);

    throw e;
  }
}

const createResponse = <T>(res: AxiosResponse<T>): IBaseResponse<T> => ({
  data: res.data,
  status: res.status,
  statusText: res.statusText,
});
