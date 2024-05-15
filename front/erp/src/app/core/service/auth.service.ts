import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {UserModel} from "../dto/user.model";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  protected readonly baseUrl = environment.baseUrlBack;

  constructor(private http: HttpClient) {
  }

  registerUser(email: string, password: string, firstName: string, lastName: string): Observable<UserModel> {
    return this.http.post<UserModel>(this.baseUrl + 'auth/register', {email, password, firstName, lastName});
  }
}
