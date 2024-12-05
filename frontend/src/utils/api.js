import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:6136/api",
});

export default API;