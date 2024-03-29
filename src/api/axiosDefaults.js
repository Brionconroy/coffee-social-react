import axios from "axios";

axios.defaults.baseURL = "https://coffee-social-4aee33ad3a6e.herokuapp.com";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();
