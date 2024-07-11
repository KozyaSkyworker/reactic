import { StateSchema } from "app/providers/StoreProvider";
import { getLoginIsLoading } from "./getLoginIsLoading";

describe('test getLoginIsLoading selector', () => {
    test('loading is true', () => {
        const state: Partial<StateSchema> = {loginForm: {isLoading: true, username: '1', password: '1', error: 'error123'}}
        expect(getLoginIsLoading(state as StateSchema)).toBe(true)
      });
    
    test('state is empty', async () => {
        const state: Partial<StateSchema> = {}
        expect(getLoginIsLoading(state as StateSchema)).toBe(false)
    });
  });
  