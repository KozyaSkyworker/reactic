import axios from "axios";
import { LOCAL_STORAGE_USER_KEY } from "shared/const/localstorage";

const baseURL = 'http://localhost:8000'

export const apiAxiosInstance = axios.create({
    baseURL,
    headers: {'Authorization': localStorage.getItem(LOCAL_STORAGE_USER_KEY)}
})