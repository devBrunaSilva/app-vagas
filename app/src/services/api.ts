import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.EXPO_PUBLIC_API_URL}/api` || "http://192.168.15.150:3000/api",
});

export default api;
