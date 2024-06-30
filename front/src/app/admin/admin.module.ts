import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppRoutingModule} from "../app-routing.module";
import {AdminComponent} from "./admin.component";



@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
  ]
})
export class AdminModule { }
