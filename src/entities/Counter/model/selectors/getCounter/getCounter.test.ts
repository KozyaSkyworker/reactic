import { StateSchema } from "app/providers/StoreProvider/config/StateSchema"
import { getCounter } from "./getCounter"

describe('test getCounter', ()=>{
    test('test 1', ()=>{
        const state: Partial<StateSchema> = {counter: {value: 10}}
        expect(getCounter(state as StateSchema)).toEqual({value: 10})
    })
})