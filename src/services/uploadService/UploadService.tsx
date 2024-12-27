// import { IUploadData } from "../../types/types";
import { axiosInstance } from "../axios/axios.instance";

export const UploadService = {
  async upload(file: File): Promise<any> {
    const formData = new FormData();
    formData.append("file", file);
    const { data } = await axiosInstance.post("user/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return data;
  },
};
