import { ValidatorFn } from '@angular/forms';

export function appEmailValidator(domain: string[]): ValidatorFn {
  const domainString = domain.join('|');
  const regExp = new RegExp(`[^@]{6,}@gmail\.(${domainString})`);

  return (control) => {
    return control.value === '' || regExp.test(control.value)
      ? null
      : { appEmailValidator: true };
  };
}
