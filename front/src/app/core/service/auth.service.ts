import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {FormUserModel} from "../dto/form-user.model";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {ResponseModel} from "../dto/response.model";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  protected readonly baseUrl = environment.baseUrlBack;

   private loggedIn = new BehaviorSubject<boolean>(this.hasToken());

  constructor(private http: HttpClient, private router: Router) {

  }

  registerUser(email: string, password: string, firstName: string, lastName: string): Observable<FormUserModel> {
    return this.http.post<FormUserModel>(this.baseUrl + 'auth/register', {email, password, firstName, lastName});
  }

  loginUser(email: string, password: string): Observable<ResponseModel> {
    return this.http.post<ResponseModel>(this.baseUrl + 'auth/login', {email, password});
  }

  logoutUser(){
    localStorage.removeItem('token');
    void this.router.navigate(['/auth/login']);
    this.loggedIn.next(false);
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
    this.loggedIn.next(true);
  }

  private hasToken(): boolean {
    return !!localStorage.getItem('token');
  }

  get isLogged(){
    return this.loggedIn.asObservable();
  }


}
