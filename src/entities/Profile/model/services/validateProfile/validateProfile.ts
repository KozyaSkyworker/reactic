import { IProfile, ValidateProfileError } from "../../types/profile";

export const validateProfile = (profile?: IProfile) => {

if (!profile){
    return [ValidateProfileError.NO_DATA]
}

 const {name, age, country, city, currency} = profile

 const errors:ValidateProfileError[] = []

 if (!name) {
    errors.push(ValidateProfileError.INCORRECT_NAME)
 }

 if (!age) {
    errors.push(ValidateProfileError.INCORRECT_AGE)
 }
 
 if (!country){
    errors.push(ValidateProfileError.INCORRECT_COUNTRY)
 }

 if (!city){
    errors.push(ValidateProfileError.INCORRECT_CITY)
 }
 
 if (!currency) {
    errors.push(ValidateProfileError.INCORRECT_CURRENCT)
 }
 
 return errors

}