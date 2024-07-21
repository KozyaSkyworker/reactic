import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProfile, ProfileSchema,  } from '../types/profile'
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData'
import { updateProfileData } from '../services/updateProfileData/updateProfileData'

const initialState: ProfileSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
    isEditDisabled: true
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    enableInputsEdit: (state, action: PayloadAction<boolean>) => {
      state.isEditDisabled = action.payload
    },
    cancelInputsEdit: (state, action: PayloadAction<boolean>) => {
      state.isEditDisabled = action.payload
      state.validateError = undefined
      state.formData = state.data
    },
    updateData: (state, action: PayloadAction<IProfile>) => {
      state.formData = {
        ...state.formData,
        ...action.payload,
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProfileData.pending, (state) => {
      state.error = undefined,
      state.isLoading = true
    })
    builder.addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<IProfile>) => {
      state.isLoading = false
      state.data = action.payload
      state.formData = action.payload;
    })
    builder.addCase(fetchProfileData.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
    // 
    builder.addCase(updateProfileData.pending, (state) => {
      state.validateError = undefined,
      state.isLoading = true
    })
    builder.addCase(updateProfileData.fulfilled, (state, action: PayloadAction<IProfile>) => {
      state.isLoading = false
      state.data = action.payload
      state.formData = action.payload;
      state.isEditDisabled = true;
      state.validateError = undefined;
    })
    builder.addCase(updateProfileData.rejected, (state, action) => {
      state.isLoading = false
      state.validateError = action.payload
    })
   
  },
})

// Action creators are generated for each case reducer function
export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer} = profileSlice
