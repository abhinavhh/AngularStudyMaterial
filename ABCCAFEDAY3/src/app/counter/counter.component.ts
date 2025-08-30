import { Component, EventEmitter, Output } from '@angular/core';
import { FeedbackService } from '../service/feedback.service';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  customerName: string = '';
  today: Date = new Date();
  @Output() orderStarted = new EventEmitter<string>();

  constructor(private userService: UserService, private router: Router) {}

  askOrder() {
    if(this.customerName.trim()) {
      this.userService.setUsername(this.customerName);
      this.router.navigate(['/order']);
    }
  }
}
