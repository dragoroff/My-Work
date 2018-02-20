import { ValidatorFn } from '@angular/forms';

export class Val {
   private static counter = 0;
    private static get key(){
        return "Error " + Val.counter++;
    }

        static requiered (errorMessage = 'This field is requiered'): ValidatorFn{
            return formControl => formControl.value === null || formControl.value === "" ? { [Val.key]: errorMessage} :null;
        }
        static minLength (errorMessage = 'The minimum length is ', minLength){
            return formControl => formControl.value.length < minLength ? {[Val.key]: errorMessage + minLength} :null;
        }    
        static  maxLength (errorMessage = "The maximum length is ", maxLength){
            return formControl => formControl.value.length > maxLength ? {[Val.key]: errorMessage + maxLength} :null;
        }
        static positiveNum (errorMessage = "The number must be higher than 0"){
            return formControl => formControl.value < 0 ? {[Val.key]: errorMessage} :null;
        }
        static latinLetters (errorMessage = "Use only latin letters"){
            return formControl => !(/^[a-zA-Z]*$/).test(formControl.value) ? {[Val.key]: errorMessage} :null;
        }
        static symbolControl (errorMessage = "You can use only numbers, letters or *"){
        return formControl => !(/^[A-Za-z0-9*]*$/).test(formControl.value) ? {[Val.key]: errorMessage} :null;
        }
        static numbersChecking(errorMessage="You can use only numbers"): ValidatorFn {
            return formControl=>!(/[0-9]/g).test(formControl.value) ? {[Val.key]: errorMessage} :null;
        }
}