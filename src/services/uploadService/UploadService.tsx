// import { IUploadData } from "../../types/types";
import { toast } from "react-toastify";
import { axiosInstance } from "../axios/axios.instance";

export const UploadService = {
  async upload(
    file: File,
    comment: string,
    rating: string,
    coordinates: any,
    userId: number
  ): Promise<any> {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("comment", comment);
    formData.append("rating", rating);
    formData.append("coordinates", coordinates);
    formData.append("userId", userId.toString());
    console.log("coordinates", coordinates);
    console.log("userId", userId);
    const data = await axiosInstance.post("markers/upload", formData, {
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
  if (!file) return;
  formData.append("file", file);
  formData.append("comment", "Строка тестовая_1");
  toast.success("uploadFile " + file.name);
  try {
    const data = axiosInstance
      .post("user/upload", formData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          mode: "no-cors",
        },
      })
      .then((res: any) => {
        toast.success("2 res uploadFile");
        toast.success(res);
      })
      .catch((error: any) => {
        toast.success("2 error uploadFile");
        toast.success(error);
      });

    return data;
  } catch (error: any) {
    toast.success("try catch error");
    toast.success(error);
  }
};
