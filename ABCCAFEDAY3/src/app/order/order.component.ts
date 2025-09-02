import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { filter } from 'rxjs';
import { Router } from '@angular/router';
import { Items } from '../service/items.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit{
  username: string = '';
  beverageList = [
    { id: 1, name: "Fresh Lime", price: 2.5 },
    { id: 2, name: "Soda Lime", price: 3.0 },
    { id: 3, name: "Mojito", price: 4.5 },
    { id: 4, name: "Orange Juice", price: 3.75 },
    { id: 5, name: "Mango Juice", price: 4.0 },
    { id: 6, name: "Smoothie", price: 5.5 }
  ];

  selectedItem: Items[] = [];

  constructor(private userService: UserService, private route: Router) { }

  ngOnInit() {
    this.username = this.userService.username;
    this.userService.usernameChanged.subscribe(name => this.username = name);
    console.log('username: '+ this.username);
  }

  addItem(item: {id: number, name: string, price: number, count?: number}) {
    const existing = this.selectedItem.find(i => i.username === this.username);

    if(existing) {
      existing.name.push(item.name);
      existing.price.push(item.price);
      existing.count.push(1);
    }
    else {
      this.selectedItem.push({
        id: item.id,
        name: [item.name],
        price: [item.price],
        count: [1],
        username: this.username
      })

    }
  }

  decrease(item: Items, index: number) {
    if( item.count[index] > 0) {
      item.count[index] -= 1;
      if( item.count[index] === 0) {
        this.remove(item, index);
      }
    }
    
  }

  increase(item: Items, index: number) {
    item.count[index] += 1;
  }

  remove(item: Items, index: number){
    item.name.splice(index, 1);
    item.price.splice(index, 1);
    item.count.splice(index, 1);

    if(item.name.length === 0) {
      this.selectedItem = this.selectedItem.filter(i => i.id !== item.id);
    }
  }

  

  onPlaceOrder() {
    this.userService.selectedBeverages(this.selectedItem);
    this.route.navigate(['order-summary']);
  }
} 
