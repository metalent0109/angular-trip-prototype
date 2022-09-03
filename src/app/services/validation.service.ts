import {Injectable} from "@angular/core";
import {ValidatorFn, Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root',
})
export class ValidationService {

  text(maxLength: number): Array<ValidatorFn> {
    return [
      Validators.required,
      Validators.maxLength(maxLength),
    ];
  }

  email(): Array<ValidatorFn> {
    return [
      Validators.required,
      Validators.email,
    ];
  }

  password(): Array<ValidatorFn> {
    return [
      Validators.required,
      Validators.minLength(8),
    ];
  }

  phone(): Array<ValidatorFn> {
    return [
      Validators.required,
      Validators.pattern('/\d/gi'),
    ];
  }
}
