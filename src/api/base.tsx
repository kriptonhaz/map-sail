import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";

type APIParams = {
  cookie?: string;
  baseUrl?: string;
};

let API: AxiosInstance;

const setupAPIClient = (params?: { baseUrl?: string }) => {
  API = axios.create({
    baseURL: "http://157.245.151.252:8899",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  API.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response) {
        console.error(
          JSON.stringify({
            name: "[api][error]",
            detail: error.response?.data,
          })
        );
      } else {
        console.error("[error]", error);
      }

      return Promise.reject(error);
    }
  );
};

export const initialize = (
  params?: APIParams,
  anonymous?: boolean
): AxiosInstance => {
  // always create new axios instance when cookie changed
  if (params?.cookie || params?.baseUrl || !API || anonymous) {
    if (params?.baseUrl) {
      setupAPIClient({ baseUrl: params.baseUrl });
    } else {
      setupAPIClient();
    }
  }
  return API;
};

export default initialize;
