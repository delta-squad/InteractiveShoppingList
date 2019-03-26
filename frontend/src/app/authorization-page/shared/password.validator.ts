import { AbstractControl } from "@angular/forms";

export function PasswordValidator(control : AbstractControl) : {[key : string]: boolean} | null{
const newPassword = control.get('newPassword');
const newConfirmPassword = control.get('newConfirmPassword');
if(newPassword.pristine || newConfirmPassword.pristine)
{
    return null;
}
if(newConfirmPassword.value === '')
{
    return null;
}
return newPassword && newConfirmPassword && newPassword.value != newConfirmPassword.value ? 
{'misMatch' : true}: null;
}