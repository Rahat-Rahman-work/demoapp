import { AbstractControl } from '@angular/forms';
import { Validator, NG_VALIDATORS } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
    selector: '[appConfirmEqualValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: ConfirmEqualValidatorDirective,
        multi: true
    }]
})

export class ConfirmEqualValidatorDirective implements Validator {
 @Input() appConfirmEqualValidator: string;
 validate(control: AbstractControl): {[key:string]: any} | null{
      const controlToCompate= control.parent.get(this.appConfirmEqualValidator);
      if(controlToCompate && controlToCompate.value !== control.value) {
          return { 'notEqual': true};
      }
debugger
      return null;
 }
}