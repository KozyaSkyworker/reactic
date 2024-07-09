import { ICounterSchema } from "entities/Counter";
import { UserSchema } from "entities/User";
import { LoginSchema } from "features/AuthByUsername";

export interface StateSchema {
    counter: ICounterSchema,
    user: UserSchema,
    loginForm: LoginSchema
}