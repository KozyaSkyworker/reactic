import { StateSchema } from "app/providers/StoreProvider";
import { validateProfile } from "./validateProfile";
import { Currency } from "shared/const/common";
import { getProfileData } from "../../selectors/getProfileData/getProfileData";
import { ValidateProfileError } from "../../types/profile";

const data = {
    name: 'Danila',
    city: 'Ulyanovsk',
    country: 'Russia',
    age: '22',
    currency: Currency.RUB,
    username: 'danilka',
    avatar: 'https://i.pinimg.com/474x/97/68/7a/97687a310b2d76aeb10cb70e09882405.jpg',
  }

describe('test validateProfile', () => {
  test('success', () => {
    const result = validateProfile(data)
    expect(result).toEqual([])
  });

  test('name is empty', async () => {
    const result = validateProfile({...data, name: ''})
    expect(result).toEqual([
        ValidateProfileError.INCORRECT_NAME
    ])
  });

  test('age is empty', async () => {
    const result = validateProfile({...data, age: ''})
    expect(result).toEqual([
        ValidateProfileError.INCORRECT_AGE
    ])
  });

  test('data is empty', async () => {
    const result = validateProfile({})
    expect(result).toEqual([
        ValidateProfileError.INCORRECT_NAME,
        ValidateProfileError.INCORRECT_AGE,
        ValidateProfileError.INCORRECT_COUNTRY,
        ValidateProfileError.INCORRECT_CITY,
        ValidateProfileError.INCORRECT_CURRENCT
    ])
  });
});
