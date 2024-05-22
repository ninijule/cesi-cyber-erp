import {Component, OnInit} from '@angular/core';
import {UserService} from "../core/service/user.service";
import {UserModel} from "../core/dto/user.model";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {

  usersList: UserModel[] = [];

  displayedColumns: string[] = ['id' , 'firstName', 'lastName', 'email', 'is_admin'];

  clickedRows = new Set<UserModel>();

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(reponse => {
      this.usersList = reponse;
    });
  }

}
