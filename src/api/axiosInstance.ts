import axios from "axios";
import { baseurl } from "./url";

export const axiosInstance = axios.create({
    baseURL: baseurl,
// add other configurations as needed
});