import { ProfileSchema } from "../types/profile";
import { profileActions, profileReducer } from "./profileSlice";

describe('test profile Slice', () => {
  test('set isEditDisabled to False', () => {
    const state: DeepPartial<ProfileSchema> = {isEditDisabled: true}
    expect(profileReducer(state as ProfileSchema, profileActions.enableInputsEdit(false))).toEqual({isEditDisabled: false})
  });

  test('updateData', () => {
    const state: DeepPartial<ProfileSchema> = {formData: {name: "Ddd", age: '21'}}
    expect(profileReducer(state as ProfileSchema, profileActions.updateData({name: "kkk", age: '19'}))).toEqual({formData: {name: "kkk", age: '19'}})
  });

  

});
  