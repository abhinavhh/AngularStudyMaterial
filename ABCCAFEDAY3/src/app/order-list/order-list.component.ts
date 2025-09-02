import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { FeedbackService } from '../service/feedback.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent {
    showReviewPage: boolean = false;
    orderList: {orderId: number, customerName: string, reviewSubmit?: boolean}[] = [];

    constructor(private userService: UserService, private feedbackService: FeedbackService, private router: Router) { }

    ngOnInit() {
      this.orderList = this.userService.orderList;
      if(this.orderList.length < 1) {
        alert('No Orders.');
        this.router.navigate([''])
      }
    }
    setReviewVisible(orderId: number) {
      this.showReviewPage = true;
      this.feedbackService.orderId = orderId;
      let order = this.orderList.find(o => o.orderId === orderId);
      if( order ) {
        order.reviewSubmit = true;
      }
    }

}
