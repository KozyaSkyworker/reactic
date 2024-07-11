import { StateSchema } from "app/providers/StoreProvider";
import { getLoginPassword } from "./getLoginPassword";

describe('test getLoginPassword selector', () => {
  test('password = 1', () => {
    const state: Partial<StateSchema> = {loginForm: {isLoading: true, username: '1', password: '1', error: 'error123'}}
    expect(getLoginPassword(state as StateSchema)).toBe('1')
  });

  test('state is empty', async () => {
      const state: Partial<StateSchema> = {}
      expect(getLoginPassword(state as StateSchema)).toBe('')
  });
});
  