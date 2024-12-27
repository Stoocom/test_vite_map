// import { IUploadData } from "../../types/types";
import { axiosInstance } from "../axios/axios.instance";

export const UploadService = {
  async upload(file: File): Promise<any> {
    const formData = new FormData();
    formData.append("file", file);
    const { data } = await axiosInstance.post("user/upload", formData, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    });
    return data;
  },
};
