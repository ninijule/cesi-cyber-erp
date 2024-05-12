import {Component} from '@angular/core';
import {AuthService} from "../../core/service/auth.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {


  userForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    passwordConfirm: new FormControl(''),
  });

  constructor(private authService: AuthService) {
  }


  onRegister(): void {
    this.authService.registerUser('', '').subscribe(response => console.log(response));
  }

}
