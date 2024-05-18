import {Component, OnInit} from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {AuthService} from "../../core/service/auth.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    MatToolbar,
    MatIcon,
    MatIconButton,
    MatMenu,
    MatButton,
    MatMenuItem,
    MatMenuTrigger,
    RouterLink
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent implements OnInit{

  isLogged = false;

  constructor(private authService: AuthService) {
  }


  logout(){
    this.authService.logoutUser();
  }

  ngOnInit(): void {
    this.isLogged = this.authService.isLogged();
  }


}
