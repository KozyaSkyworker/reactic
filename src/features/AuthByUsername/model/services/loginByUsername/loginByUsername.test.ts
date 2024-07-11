import { StateSchema } from "app/providers/StoreProvider"
import axios from "axios"
import { loginByUsername } from "./loginByUsername"
import { Dispatch } from "@reduxjs/toolkit"
import { userActions } from "entities/User"

jest.mock('axios')

const mockedAxios = jest.mocked(axios)

describe('test loginByUsername', ()=>{
    let dispatch: Dispatch
    let getState: () => StateSchema

    beforeEach(()=>{
        dispatch = jest.fn()
        getState = jest.fn()
    })

    test("all good", async ()=>{
        mockedAxios.post.mockReturnValue(Promise.resolve({data: {username: '123', id: '1'}}))
      
        const action = loginByUsername({username: '123', password: '123'})
        
        const result = await action(dispatch, getState, undefined)

        expect(mockedAxios.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData({username: '123', id: '1'}))
        expect(dispatch).toHaveBeenCalledTimes(3)
        expect(result.payload).toEqual({username: '123', id: '1'})
    })

    test("403 status code", async ()=>{
        mockedAxios.post.mockReturnValue(Promise.resolve({status: 403}))
      
        const action = loginByUsername({username: '123', password: '123'})
        
        const result = await action(dispatch, getState, undefined)

        expect(mockedAxios.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toBe('Something went wrong!')
        expect(dispatch).toHaveBeenCalledTimes(2)
    })
    
})