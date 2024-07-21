import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider"
import { IProfile, ValidateProfileError } from "../../types/profile"
import { getProfileFormData } from "../../selectors/getProfileFormData/getProfileFormData"
import { validateProfile } from "../validateProfile/validateProfile"

export const updateProfileData = createAsyncThunk<IProfile, void, ThunkConfig<ValidateProfileError[]>>(
    'profile/updateProfileData',
    async (_, thunkAPI) => {

        const formData = getProfileFormData(thunkAPI.getState())

        const errors = validateProfile(formData)

        if (errors.length){
            return thunkAPI.rejectWithValue(errors)
        }

        try {
            const response = await thunkAPI.extra.api.put<IProfile>('/profile', formData)

            return response.data

        } catch (error) {   
            return thunkAPI.rejectWithValue([ValidateProfileError.SERVER_ERROR])
        }
    },
)