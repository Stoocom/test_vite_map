import { IUserData } from "../../types/types";
import { axiosInstance } from "./axios.instance";

export const AuthService = {
  async registration(userData: IUserData): Promise<any> {
    const { data } = await axiosInstance.post("user", userData);
    return data;
  },
  async login(userData: IUserData): Promise<any> {
    const { data } = await axiosInstance.post("auth/login", userData);
    return data;
  },
  async logout() {},
};
