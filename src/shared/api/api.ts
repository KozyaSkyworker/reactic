import axios from "axios";
import { LOCAL_STORAGE_USER_KEY } from "shared/const/localstorage";

export const apiAxiosInstance = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {'Authorization': localStorage.getItem(LOCAL_STORAGE_USER_KEY)}
})