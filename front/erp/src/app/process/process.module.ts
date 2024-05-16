import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProcessRoutingModule} from "./process-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {ProcessComponent} from "./process.component";


@NgModule({
  declarations: [ProcessComponent],
  imports: [
    CommonModule, ProcessRoutingModule, ReactiveFormsModule, MatFormField, MatLabel, MatInput, MatButton, MatError
  ]
})
export class ProcessModule {
}
