import { StateSchema } from "app/providers/StoreProvider";
import { getProfileError } from "./getProfileError";
import { Currency } from "shared/const/common";


describe('test getProfileError selector', () => {
  test('error message exists', () => {
    const data = {
        name: 'Danila',
        city: 'Ulyanovsk',
        country: 'Russia',
        age: '22',
        currency: Currency.RUB,
        username: 'danilka',
        avatar: 'https://i.pinimg.com/474x/97/68/7a/97687a310b2d76aeb10cb70e09882405.jpg',
      }

    const state: DeepPartial<StateSchema> = {profile: {error: 'error message'}}
    expect(getProfileError(state as StateSchema)).toBe('error message')
  });

  test('state is empty', async () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileError(state as StateSchema)).toBeUndefined()
  });
});
