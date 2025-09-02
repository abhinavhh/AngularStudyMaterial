import { EventEmitter, Injectable, OnInit } from "@angular/core";
import { Items } from "./items.model";

@Injectable({
    providedIn: 'root'
})
export class UserService{
    username: string = '';
    selectedItems: Items[] = [];
    usernameChanged = new EventEmitter<string>();

    orderList: {orderId: number, customerName: string, reviewSubmit?: boolean}[] = [];


    setUsername(name: string) {
        this.username = name;
        this.usernameChanged.emit(this.username);
    }

    selectedBeverages(selected: Items[]) {
        this.selectedItems = selected;

        const newOrderId = this.orderList.length + 1;
        this.orderList.push({
            orderId: newOrderId,
            customerName: this.username,
            reviewSubmit: false,
        })
        
    }

}