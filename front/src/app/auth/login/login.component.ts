import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../core/service/auth.service";
import {Router} from "@angular/router";
import {catchError, EMPTY} from "rxjs";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  userForm = new FormGroup({
    email: new FormControl('test@test.fr', [Validators.required, Validators.email]),
    password: new FormControl('aaaaaaaaaaaa', [Validators.required]),
  });

  constructor(private authService: AuthService, private router: Router) {
  }

  onSubmit(): void {

    const email = this.userForm.get('email')?.value ?? '';
    const password = this.userForm.get('password')?.value ?? '';


    if (this.userForm.valid) {
      this.authService.loginUser(email, password).pipe(catchError(() => {
        return EMPTY;
      })).subscribe(response => {
        this.authService.setToken(response.token);
        void this.router.navigate(['/car']);
      });
    }
  }

}
