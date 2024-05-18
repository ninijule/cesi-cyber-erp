import {Component, inject, OnInit} from '@angular/core';
import {CarService} from "../../core/service/car.service";
import {CarModel} from "../../core/dto/car.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-detail-car',
  templateUrl: './detail-car.component.html',
  styleUrl: './detail-car.component.scss'
})
export class DetailCarComponent implements OnInit {

  private route = inject(ActivatedRoute);
  private router = inject(Router);

  id = 0;

  constructor(private carService: CarService) {
  }



  car: CarModel = {description: "", id: 0, img: "", is_active: false, name: "", price: 0};

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });

    if(this.id && this.id !== 0){
      this.carService.getCar(this.id).subscribe(response => {
        this.car = response;
      });
    }

  }

}
