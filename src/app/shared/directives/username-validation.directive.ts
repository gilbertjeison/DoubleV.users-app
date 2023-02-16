import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, ValidatorFn } from '@angular/forms';

export function invalidNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? {invalidName: {value: control.value}} : null;
  };
}

@Directive({
  selector: '[appUserNameValidation]',
  providers: [{provide: NG_VALIDATORS, useExisting: UsernameValidationDirective, multi: true}]
})
export class UsernameValidationDirective {
  @Input('appUserNameValidation') invalidName = '';

  validate(control: AbstractControl): ValidationErrors | null {
    return this.invalidName ? invalidNameValidator(new RegExp(this.invalidName, 'i'))(control) : null;
  }
}
