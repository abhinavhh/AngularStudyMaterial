import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


export interface IDeactivateComponent{
    canExit: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class CanDeactivateGuardService implements CanDeactivate<IDeactivateComponent>{
    canDeactivate(
        iDeactivateComponentomponent: IDeactivateComponent,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        return iDeactivateComponentomponent.canExit();
    }
}