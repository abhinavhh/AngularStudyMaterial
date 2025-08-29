import { Component } from '@angular/core';
import { ActivatedRoute, Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Routing';
  displayLoadingIndicator: boolean = false;
  constructor(private activatedRoute: ActivatedRoute, private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.activatedRoute.fragment.subscribe((value) => {
      console.log(value);
      this.jumpTO(value);
    });

    this.router.events.subscribe((routerEvent: Event) => {
      if(routerEvent instanceof NavigationStart) {
        this.displayLoadingIndicator = true;
      }

      if(routerEvent instanceof NavigationEnd || routerEvent instanceof NavigationCancel || routerEvent instanceof NavigationError) {
        this.displayLoadingIndicator = false;
      }
    })
  }

  jumpTO(section: any) {
    document.getElementById(section)?.scrollIntoView({behavior: 'smooth'});
  }

  logIn() {
    alert('Logged In successfully');
    this.authService.login()
  }
  logOut() {
    alert('LogOut successfull');
    this.authService.logOut()
  }
}
