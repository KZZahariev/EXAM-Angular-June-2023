import { FormGroup, ValidatorFn } from "@angular/forms";

export function matchPasswordValidator(passwordCtrOne: string, passwordCtrTwo: string): ValidatorFn{
    return (control) => {
        const group = control as FormGroup
        const passControl1 = group.get(passwordCtrOne);
        const passControl2 = group.get(passwordCtrTwo);
        return passControl1?.value === passControl2?.value
        ? null
        : { matchPasswordValidator: true }
    }
}