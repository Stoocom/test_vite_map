import axios from "axios";

export const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:3010/api",
  // headers: {
  //   Authorization: "Bearer",
  // },
});
