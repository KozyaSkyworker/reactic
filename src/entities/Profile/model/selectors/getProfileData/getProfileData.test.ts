import { StateSchema } from "app/providers/StoreProvider";
import { getProfileData } from "./getProfileData";
import { Currency } from "shared/const/common";


describe('test getProfileData selector', () => {
  test('profile data exists', () => {
    const data = {
        name: 'Danila',
        city: 'Ulyanovsk',
        country: 'Russia',
        age: '22',
        currency: Currency.RUB,
        username: 'danilka',
        avatar: 'https://i.pinimg.com/474x/97/68/7a/97687a310b2d76aeb10cb70e09882405.jpg',
      }

    const state: DeepPartial<StateSchema> = {profile: {data}}
    expect(getProfileData(state as StateSchema)).toEqual(data)
  });

  test('state is empty', async () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileData(state as StateSchema)).toBeUndefined()
  });
});
