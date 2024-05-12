import {Component} from '@angular/core';
import {AuthService} from "../../core/service/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private authService: AuthService) {
  }


  onRegister(): void {
    this.authService.registerUser('', '').subscribe(response => console.log(response));
  }

}
