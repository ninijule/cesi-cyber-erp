import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {CarRoutingModule} from "./car-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {CarComponent} from "./car.component";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {DetailCarComponent} from "./detail-car/detail-car.component";


@NgModule({
  declarations: [CarComponent, DetailCarComponent],
  imports: [
    CommonModule, CarRoutingModule, ReactiveFormsModule, MatFormField, MatLabel, MatInput, MatButton, MatError, MatGridList, MatGridTile, MatCard, MatCardHeader, MatCardContent, MatCardTitle, MatCardSubtitle, NgOptimizedImage, MatCardImage
  ]
})
export class CarModule {
}
