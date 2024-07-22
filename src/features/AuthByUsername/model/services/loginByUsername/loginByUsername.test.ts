import axios from "axios";
import { TestAsyncThunk } from "shared/lib/TestAsyncThunk/TestAsyncThunk";
import { loginByUsername } from "./loginByUsername";
import { userActions } from "entities/User";

jest.mock('axios');

const mockedAxios = jest.mocked(axios);

describe('test loginByUsername', ()=>{
    

    test("all good", async ()=>{
        // const userValue = { username: '123', id: '1' };
        // mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));

        // const thunk = new TestAsyncThunk(loginByUsername);
        // const result = await thunk.callThunk({ username: '123', password: '123' });

        // expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
        // expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        // expect(mockedAxios.post).toHaveBeenCalled();
        // expect(result.meta.requestStatus).toBe('fulfilled');
        // expect(result.payload).toEqual(userValue);
    })

    test("403 status code", async ()=>{
        // mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
        // const thunk = new TestAsyncThunk(loginByUsername);
        // const result = await thunk.callThunk({ username: '123', password: '123' });

        // expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        // expect(mockedAxios.post).toHaveBeenCalled();
        // expect(result.meta.requestStatus).toBe('rejected');
        // expect(result.payload).toBe('error');
    })
    
})