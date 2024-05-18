import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CarModel} from "../dto/car.model";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  protected readonly baseUrl = environment.baseUrlBack;

  constructor(private http: HttpClient) {
  }


  getCars(): Observable<CarModel[]> {
    return this.http.get<CarModel[]>(this.baseUrl + 'car');
  }

  getCar(id: number): Observable<CarModel> {
    return this.http.get<CarModel>(this.baseUrl + 'car/' + id);
  }

}
