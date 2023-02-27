import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 10000,
	headers: {
		Accept: "application/json,*/*",
		"Content-Type": "application/json",
	},
})