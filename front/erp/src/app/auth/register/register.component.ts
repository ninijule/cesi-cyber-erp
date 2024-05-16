import {Component} from '@angular/core';
import {AuthService} from "../../core/service/auth.service";
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";


export const matchFieldsValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const email = control.get('email');
  const emailConfirm = control.get('emailConfirm');
  const password = control.get('password');
  const passwordConfirm = control.get('passwordConfirm');

  const errors: ValidationErrors = {};

  if (email && emailConfirm && email.value !== emailConfirm.value) {
    errors['emailMismatch'] = true;
  }

  if (password && passwordConfirm && password.value !== passwordConfirm.value) {
    errors['passwordMismatch'] = true;
  }

  return Object.keys(errors).length ? errors : null;
};

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {


  userForm = new FormGroup({
    firstName: new FormControl('aaaaaaaaaaaa', [Validators.required]),
    lastName: new FormControl('aaaaaaaaaaaa ', [Validators.required]),
    email: new FormControl('test@test.fr', [Validators.required, Validators.email]),
    emailConfirm: new FormControl('test@test.fr', [Validators.required, Validators.email]),
    password: new FormControl('aaaaaaaaaaaa', [Validators.required]),
    passwordConfirm: new FormControl('aaaaaaaaaaaa', [Validators.required]),
  }, {validators: matchFieldsValidator});

  constructor(private authService: AuthService,
              private _snackBar: MatSnackBar) {
  }

  get emailMismatch(): boolean {
    return this.userForm.hasError('emailMismatch');
  }

  get passwordMismatch(): boolean {
    return this.userForm.hasError('passwordMismatch');
  }


  onSubmit(): void {
    const email = this.userForm.get('email')?.value ?? '';
    const password = this.userForm.get('password')?.value ?? '';
    const firstName = this.userForm.get('firstName')?.value ?? '';
    const lastName = this.userForm.get('lastName')?.value ?? '';


    if (this.userForm.valid) {
      this.authService.registerUser(email, password, firstName, lastName ).subscribe(response => console.log(response));
    } else {
      this._snackBar.open('Please fill all fields of the form.', '', {
        duration: 1500,
      });
    }
  }

}
