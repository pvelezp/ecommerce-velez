import axios from "axios";
import { BASE_URL } from "@/constants";

export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
	headers: {
		Accept: "application/json,*/*",
		"Content-Type": "application/json",
	},
})