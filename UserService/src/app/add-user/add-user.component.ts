import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit{

  username: string = '';
  status: string = 'active';
  constructor(private userService: UserService) { }
  
  ngOnInit() {

  }

  addUser() {
    this.userService.AddNewUser(this.username, this.status);
  }
}
