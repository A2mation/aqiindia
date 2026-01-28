import axios from "axios"

export const http = axios.create({
  baseURL: "/",
  timeout: 10000,
  validateStatus: () => true,
  headers: {
    "Content-Type": "application/json",
    "User-Agent": "AQI-App/1.0",
  },
})
