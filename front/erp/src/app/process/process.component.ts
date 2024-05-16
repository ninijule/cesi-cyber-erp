import {Component, OnInit} from '@angular/core';
import {ProcessService} from "../core/service/process.service";
import {ProcessModel} from "../core/dto/process.model";

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrl: './process.component.scss'
})
export class ProcessComponent implements OnInit {

  processList: ProcessModel[] = [];

  constructor(private processService: ProcessService) {
  }


  ngOnInit(): void {
     this.processService.getProcess().subscribe(response => {
      this.processList = response;
     });
  }


}
