import { Component } from '@angular/core';
import { IDeactivateComponent } from '../services/candeactivate-guard.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements IDeactivateComponent{
  username: string = '';
  usermail: string = '';
  message: string = '';

  canExit() {
    if(this.username || this.usermail || this.message) {
      return confirm('You have unsaved changes. Do you really want to discard these changes')
      
    }
    else {
      return true;
    }
  }
}
