import { ValidatorFn } from '@angular/forms';

import { Val } from './validation/validation-form';
import { ValidatedData } from './validation/validatedData'

export class ValidationRules {
    static get loginRules() :ValidatorFn[]{
        return [
            Val.requiered(),
            Val.minLength("The minimum length is ", ValidatedData.minNameLength),
            Val.maxLength("The maximimum length is ", ValidatedData.maxNameLength),
            Val.latinLetters()
        ];
    }
    static get passwordRules() :ValidatorFn[]{
        return [
            Val.requiered(),
            Val.minLength("The minimum length is ", ValidatedData.minPasswordLength),
            Val.maxLength("The maximum length is ", ValidatedData.maxPasswordLength),
            Val.symbolControl()
        ];
    }
    static get registerName(): ValidatorFn[]{
        return [
            Val.requiered(),
            Val.latinLetters(),
            Val.minLength('The minimum length is ',ValidatedData.minNameLength),
            Val.maxLength('The maximum length is ', ValidatedData.maxNameLength)
        ];
    }
    static get registerLastName(): ValidatorFn[]{
        return [
            Val.requiered(),
            Val.latinLetters(),
            Val.minLength('The minimum length is ',ValidatedData.minNameLength),
            Val.maxLength('The maximum length is ', ValidatedData.maxNameLength)
        ];
    }
    static get ageChecking(): ValidatorFn[]{
        return [
            Val.requiered(),
            Val.positiveNum(),
            Val.numbersChecking()
        ];
    }
}