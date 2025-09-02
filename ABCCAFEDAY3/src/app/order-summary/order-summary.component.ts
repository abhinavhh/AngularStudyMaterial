import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { Items } from '../service/items.model';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent {
  orderSummary: Items[] = [];
  
  constructor(private userService: UserService) {

  }

  ngOnInit() {
    this.orderSummary = this.userService.selectedItems;
  }
}
