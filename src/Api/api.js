import axios from "axios";

export const apiUrl = "https://ebay-server.vercel.app";

export const jwtAxios = axios.create({
    baseURL: apiUrl,
    headers: {
        authorization: `Bearer ${localStorage.getItem("ebay-token")}`,
    },
});
