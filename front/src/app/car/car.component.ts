import {Component, OnInit} from '@angular/core';
import {CarService} from "../core/service/car.service";
import {CarModel} from "../core/dto/car.model";

@Component({
  selector: 'app-process',
  templateUrl: './car.component.html',
  styleUrl: './car.component.scss'
})
export class CarComponent implements OnInit {

  carList: CarModel[] = [];

  constructor(private carService: CarService) {
  }


  ngOnInit(): void {
     this.carService.getCars().subscribe(response => {
      this.carList = response;
     });
  }


}
