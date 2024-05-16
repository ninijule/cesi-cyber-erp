import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProcessModel} from "../dto/process.model";

@Injectable({
  providedIn: 'root'
})
export class ProcessService {

  protected readonly baseUrl = environment.baseUrlBack;

  constructor(private http: HttpClient) {
  }


  getProcess(): Observable<ProcessModel[]> {
    return this.http.get<ProcessModel[]>(this.baseUrl + 'process');
  }

}
