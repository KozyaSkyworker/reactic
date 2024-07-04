import { counterReducer, counterActions } from "./counterSlice"
import { ICounterSchema } from "../types/CounterSchema"

describe('test counter slice', ()=>{
    test("increment", ()=>{
        const state: ICounterSchema = {value: 10}
        expect(counterReducer(state, counterActions.increment())).toEqual({value: 11})
    })
    test("decrement", ()=>{
        const state: ICounterSchema = {value: 10}
        expect(counterReducer(state, counterActions.decrement())).toEqual({value: 9})
    })
    test("undefined state", ()=>{
        expect(counterReducer(undefined, counterActions.decrement())).toEqual({value: -1})
    })
})