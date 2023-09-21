import axios from "axios";

export const createAxiosInstance = (url: string) => {
  const axiosInstance = axios.create({ baseURL: "https://itunes.apple.com" });

  return axiosInstance.get(url);
};
