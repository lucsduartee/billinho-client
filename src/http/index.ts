import axios, { AxiosInstance } from "axios";

const httpClient: AxiosInstance = axios.create({
  baseURL: "http://localhost:3000/api/v1/",
});

export default httpClient;
