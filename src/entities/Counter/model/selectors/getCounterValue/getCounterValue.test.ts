import { StateSchema } from "app/providers/StoreProvider"
import { getCounterValue } from "./getCounterValue"

describe('test getCounterValue', ()=>{
    test('test 1', ()=>{
        const state: Partial<StateSchema> = {counter: {value: 10}}
        expect(getCounterValue(state as StateSchema)).toBe(10)
    })
})