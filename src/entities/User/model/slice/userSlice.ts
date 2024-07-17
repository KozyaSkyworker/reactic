import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser, UserSchema } from '../types/user'
import { LOCAL_STORAGE_USER_KEY } from 'shared/const/localstorage'

const initialState: UserSchema = {}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<IUser>)=>{
      console.log(action.payload)
      state.authData = action.payload
    },
    initAuthData: (state) => {
      const curUser = localStorage.getItem(LOCAL_STORAGE_USER_KEY)
      if (curUser){
        state.authData = JSON.parse(curUser)
      }
    },
    logout: (state) => {
      state.authData = undefined
      localStorage.removeItem(LOCAL_STORAGE_USER_KEY)
    }
  },
})

// Action creators are generated for each case reducer function
export const { actions: userActions } = userSlice
export const { reducer: userReducer} = userSlice
