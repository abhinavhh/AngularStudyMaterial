import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  constructor(private userService: UserService) { }
  
  users: {name: string, job: string, gender: string, country: string, age: number, avatar: string}[] = [];

  ngOnInit(): void {
    this.users = this.userService.users;
  }

  showDetails(user: {name: string, job: string, gender: string, country: string, age: number, avatar: string}) {

    this.userService.showUserDetails(user);

  }


}
