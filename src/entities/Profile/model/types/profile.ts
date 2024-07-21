import { Currency } from "shared/const/common";

export enum ValidateProfileError {
    INCORRECT_NAME = 'INCORRECT_NAME',
    INCORRECT_AGE = 'INCORRECT_AGE',
    INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
    INCORRECT_CITY = 'INCORRECT_CITY',
    INCORRECT_CURRENCT = 'INCORRECT_CURRENCT',
    SERVER_ERROR = 'Something went wrong!',
    NO_DATA = 'NO_DATA'
}

export interface IProfile {
    name?: string,
    city?: string,
    country?: string,
    age?: string,
    currency?: Currency,
    username?: string,
    avatar?: string
}

export interface ProfileSchema {
    data?: IProfile,
    isLoading: boolean,
    error?: string,
    isEditDisabled: boolean,
    formData?: IProfile,
    validateError?: ValidateProfileError[]
}