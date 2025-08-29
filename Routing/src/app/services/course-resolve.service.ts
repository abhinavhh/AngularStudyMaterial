import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { CourseService } from "./courses.service";
import { Injectable } from "@angular/core";

@Injectable()
export class CourseResolveService implements Resolve<any>{

    constructor(private coursesService: CourseService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
        return this.coursesService.getAllCourses().then((data) => {
            return data;
        })
    }
}