import { LoginSchema } from "../types/loginSchema";
import { loginActions, loginReducer } from "./loginSlice";

describe('test getLogin Slice', () => {
  test('set username', () => {
    const state: Partial<LoginSchema> = {username: ''}
    expect(loginReducer(state as LoginSchema, loginActions.setUsername('Danila'))).toEqual({"username": "Danila"})
  });
  test('set password', () => {
    const state: Partial<LoginSchema> = {password: ''}
    expect(loginReducer(state as LoginSchema, loginActions.setPassword('secr'))).toEqual({"password": "secr"})
  });
//   test('set isLoading', () => {
//     const state: Partial<LoginSchema> = {isLoading: false}
//     expect(loginReducer(state as LoginSchema, loginByUsername.fulfilled() )).toEqual({"username": "Danila"})
//   });
//   test('set error', () => {
//     const state: Partial<LoginSchema> = {error: ''}
//     expect(loginReducer(state as LoginSchema, loginActions.setPassword('secr'))).toEqual({"password": "secr"})
//   });

});
  