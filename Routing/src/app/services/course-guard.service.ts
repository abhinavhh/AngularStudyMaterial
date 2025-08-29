import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";


@Injectable()
export class CourseGuardService implements CanActivate, CanActivateChild{

    constructor(private authService: AuthService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if(this.authService.isAuthenticated()) {
            return true;
        }
        else {
            alert('Please Login First');
            this.router.navigate(['/Courses']);
            return false;
        }
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
       return this.canActivate(childRoute, state);
    }
    
}