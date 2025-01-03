// import { IUploadData } from "../../types/types";
import { toast } from "react-toastify";
import { axiosInstance } from "../axios/axios.instance";

export const UploadService = {
  async upload(file: File): Promise<any> {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("comment", "Строка тестовая_1");
    const data = await axiosInstance.post("user/upload", formData, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        mode: "no-cors",
      },
    });
    return data;
  },
};

export const uploadFile = (file: File) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("comment", "Строка тестовая_1");
  toast.success("uploadFile " + file.name);
  const data = axiosInstance
    .post("user/upload", formData, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        mode: "no-cors",
      },
    })
    .then((res) => {
      toast.success("2 inside uploadFile");
    })
    .catch((error) => {
      toast.success("2 inside uploadFile");
    });
  return data;
};
