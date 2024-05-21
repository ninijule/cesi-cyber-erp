import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {UserModel} from "../dto/user.model";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {ResponseModel} from "../dto/response.model";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  protected readonly baseUrl = environment.baseUrlBack;

  private isLoggedIn: boolean = false;

  constructor(private http: HttpClient, private router: Router) {
    this.isLoggedIn = !!localStorage.getItem('token');
  }

  registerUser(email: string, password: string, firstName: string, lastName: string): Observable<UserModel> {
    return this.http.post<UserModel>(this.baseUrl + 'auth/register', {email, password, firstName, lastName});
  }

  loginUser(email: string, password: string): Observable<ResponseModel> {
    return this.http.post<ResponseModel>(this.baseUrl + 'auth/login', {email, password});
  }

  logoutUser(){
    localStorage.removeItem('token');
    void this.router.navigate(['/auth/login']);
    this.isLoggedIn = false;
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
    this.isLoggedIn = true;
  }

  isLogged(){
    return this.isLoggedIn;
  }


}