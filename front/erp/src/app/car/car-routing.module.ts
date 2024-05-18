import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CarComponent} from "./car.component";
import {DetailCarComponent} from "./detail-car/detail-car.component";

const routes: Routes = [
  {
    path: '',
    component: CarComponent
  },
  {
    path: ':id',
    component: DetailCarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarRoutingModule {
}
