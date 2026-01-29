import axios from "axios"

export const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SITE_URL,
  // timeout: 15000,
  validateStatus: () => true,
  headers: {
    "Content-Type": "application/json",
    "User-Agent": "AQI-App/1.0",
  },
})
