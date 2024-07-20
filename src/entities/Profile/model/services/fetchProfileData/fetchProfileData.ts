import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig, ThunkExtraArg } from "app/providers/StoreProvider";
import { IProfile } from "../../types/profile";

export const fetchProfileData = createAsyncThunk<IProfile, void, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (_, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.get<IProfile>('/profile')

            return response.data

        } catch (error) {
            return thunkAPI.rejectWithValue('Something went wrong!')
        }
    },
  )