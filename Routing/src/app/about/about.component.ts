import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(private route: Router, private activatedRoute: ActivatedRoute) { }
  
  navigateHome() {

    this.route.navigate(['Home']);

    // if we need to append to the currently active route we can use ActivatedRoute

    // this.route.navigate(['Home'], {relativeTo: this.activatedRoute});

  }
  navigateContact() {
    this.route.navigateByUrl('Contact'); 
  }
}
