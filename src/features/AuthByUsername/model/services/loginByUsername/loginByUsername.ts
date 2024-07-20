import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig, ThunkExtraArg } from "app/providers/StoreProvider";
import { IUser, userActions } from "entities/User"
import { LOCAL_STORAGE_USER_KEY } from "shared/const/localstorage";

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<IUser, LoginByUsernameProps, ThunkConfig<string>>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.post<IUser>('/login', authData)

            if(!response.data){
                throw new Error
            }

            localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(response.data))
            thunkAPI.dispatch(userActions.setAuthData(response.data))

            // thunkAPI.extra.navigate('/profile')

            return response.data

        } catch (error) {
            return thunkAPI.rejectWithValue('Something went wrong!')
        }
    },
  )