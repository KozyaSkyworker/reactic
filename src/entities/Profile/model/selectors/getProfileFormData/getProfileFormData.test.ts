import { StateSchema } from "app/providers/StoreProvider";
import { getProfileFormData } from "./getProfileFormData";
import { Currency } from "shared/const/common";


describe('test getProfileFormData selector', () => {
  test('profile formdata exists', () => {
    const data = {
        name: 'Danila',
        city: 'Ulyanovsk',
        country: 'Russia',
        age: '22',
        currency: Currency.RUB,
        username: 'danilka',
        avatar: 'https://i.pinimg.com/474x/97/68/7a/97687a310b2d76aeb10cb70e09882405.jpg',
      }

    const state: DeepPartial<StateSchema> = {profile: {formData: data}}
    expect(getProfileFormData(state as StateSchema)).toEqual(data)
  });

  test('state is empty', async () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileFormData(state as StateSchema)).toBeUndefined()
  });
});
