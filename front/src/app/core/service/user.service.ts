import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserModel} from "../dto/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  protected readonly baseUrl = environment.baseUrlBack;

  constructor(private http: HttpClient) {
  }


  getUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.baseUrl + 'user');
  }


  deleteUser(id: number) {
    return this.http.delete(this.baseUrl + 'user/' + id);
  }


}
