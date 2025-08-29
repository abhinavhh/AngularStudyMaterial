import { Component } from '@angular/core';
import { EnrollService } from '../Service/enroll.service';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css']
})
export class JavascriptComponent {
  title: string = 'Javascript'

  // constructor for creating instance
  constructor(private enrollService: EnrollService) { }

  onEnroll() {
    // EnrollService is the class we have created inside the service folder
    this.enrollService.onEnrollClicked(this.title);

  }
}
