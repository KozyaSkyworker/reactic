import { StateSchema } from "app/providers/StoreProvider";
import { getLoginError } from "./getLoginError";


describe('test getLoginError selector', () => {
  test('error message exists', () => {
    const state: Partial<StateSchema> = {loginForm: {isLoading: false, username: '1', password: '1', error: 'error123'}}
    expect(getLoginError(state as StateSchema)).toBe('error123')
  });

  test('state is empty', async () => {
    const state: Partial<StateSchema> = {}
    expect(getLoginError(state as StateSchema)).toBeUndefined()
  });
});
