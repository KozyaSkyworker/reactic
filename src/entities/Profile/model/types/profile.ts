import { Country, Currency } from "shared/const/common";

export interface IProfile {
    name: string,
    city: string,
    country: Country,
    age: number,
    currency: Currency,
    username: string
}

export interface ProfileSchema {
    data?: IProfile,
    isLoading: boolean,
    error?: string,
    readonly: boolean
}