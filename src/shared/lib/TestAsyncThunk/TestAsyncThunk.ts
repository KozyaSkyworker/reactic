import { AsyncThunkAction } from "@reduxjs/toolkit";
import { AppDispatch, StateSchema } from "app/providers/StoreProvider";

export class TestAsyncThunk<Return, Arg, RejectValue> {
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dispatch: jest.MockedFn<any>;
    getState: ()=>StateSchema
    actionCreator: (arg: Arg)=> AsyncThunkAction<Return, Arg, { rejectValue: RejectValue;  }>

    constructor(actionCreator: (arg: Arg)=> AsyncThunkAction<Return, Arg, { rejectValue: RejectValue;  }>) {
        this.actionCreator = actionCreator
        this.dispatch = jest.fn()
        this.getState = jest.fn()
    }

    async callThunk(arg: Arg){
        const action = this.actionCreator(arg);
        const result = await action(this.dispatch, this.getState, undefined)

        return result
    }
}