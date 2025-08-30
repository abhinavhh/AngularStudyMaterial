import { EventEmitter, Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class UserService{


    ifSetUsername = new EventEmitter<string>();
    setUsername(name: string) {
        this.ifSetUsername.emit(name);
        console.log(name);
    }

}