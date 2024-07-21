import { Country, Currency } from "shared/const/common";

export interface IProfile {
    name?: string,
    city?: string,
    country?: string,
    age?: number,
    currency?: Currency,
    username?: string,
    avatar?: string
}

export interface ProfileSchema {
    data?: IProfile,
    isLoading: boolean,
    error?: string,
    isEditDisabled: boolean,
    formData?: IProfile
}