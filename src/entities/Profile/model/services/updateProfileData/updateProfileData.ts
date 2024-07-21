import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider"
import { IProfile } from "../../types/profile"
import { getProfileFormData } from "../../selectors/getProfileFormData/getProfileFormData"

export const updateProfileData = createAsyncThunk<IProfile, void, ThunkConfig<string>>(
    'profile/updateProfileData',
    async (_, thunkAPI) => {

        const formData = getProfileFormData(thunkAPI.getState())

        try {
            const response = await thunkAPI.extra.api.put<IProfile>('/profile', formData)

            return response.data

        } catch (error) {   
            return thunkAPI.rejectWithValue('Something went wrong!')
        }
    },
)