import { StateSchema } from "app/providers/StoreProvider";
import { getLoginUsername } from "./getLoginUsername";

describe('test getLoginUsername selector', () => {
  test('username = 1', () => {
    const state: DeepPartial<StateSchema> = {loginForm: {isLoading: true, username: '1', password: '1', error: 'error123'}}
    expect(getLoginUsername(state as StateSchema)).toBe('1')
  });

  test('state is empty', async () => {
      const state: DeepPartial<StateSchema> = {}
      expect(getLoginUsername(state as StateSchema)).toBe('')
  });
  });
  