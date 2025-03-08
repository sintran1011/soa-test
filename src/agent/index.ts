import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://",
  timeout: 60000,
  headers: {
    "Content-Type": "application/json",
  },
});

export { apiClient };
