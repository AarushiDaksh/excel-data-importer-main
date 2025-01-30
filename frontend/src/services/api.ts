import axios from "axios";

const API_URL = "http://localhost:5000/api/upload";

export const uploadFile = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);
  return axios.post(API_URL, formData);
};
