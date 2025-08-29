import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { LoggerService } from './services/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService, LoggerService]
})
export class AppComponent implements OnInit{
  title = 'UserService';

  constructor(private userService: UserService, private loggerService: LoggerService) { }

  users: {name: string, status: string}[] = [];
  
  ngOnInit() {
    this.users = this.userService.users;
  }
}
