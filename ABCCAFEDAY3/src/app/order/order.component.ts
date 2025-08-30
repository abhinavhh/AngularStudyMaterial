import { Component } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  username: string = '';

  constructor(private userService: UserService) { }
  ngOnInit() {
    this.userService.ifSetUsername.subscribe((value: string) => {
      this.username = value;
    })
    console.log('username: '+ this.username);
  }
} 
