import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { IUser, userActions } from "entities/User"
import { LOCAL_STORAGE_USER_KEY } from "shared/const/localstorage";

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<IUser, LoginByUsernameProps, {rejectValue: string}>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post<IUser>('http://localhost:8000/login', authData)

            if(!response.data){
                throw new Error
            }

            localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(response.data))
            thunkAPI.dispatch(userActions.setAuthData(response.data))

            return response.data

        } catch (error) {
            return thunkAPI.rejectWithValue('Something went wrong!')
        }
    },
  )