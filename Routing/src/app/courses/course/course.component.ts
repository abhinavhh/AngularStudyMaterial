import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CourseService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit, OnDestroy{

  constructor( private activatedRoute: ActivatedRoute, private courseService: CourseService, private router: Router) { }

  courseId: number | string | null= 0;
  course: { id: number; title: string; description: string; image: string; author: string; duration: string; type: string; price: number; } | undefined;
  editMode: boolean = false;
  
  private routeParamObs!:Subscription;

  ngOnInit() {
    // const idParam = this.activatedRoute.snapshot.paramMap.get('id');
    // we can also use param instead of paramMap so that we can eliminate get method. but this is not used now a days.

    // const idParam = this.activatedRoute.snapshot.params['id'];

    // this.courseId = idParam ? Number(idParam) : 0;
    // this.course = this.courseService.courses.find(x => x.id === this.courseId);

    // OBSERVABLE METHOD

    this.routeParamObs = this.activatedRoute.paramMap.subscribe((param) => {
      this.courseId = param.get('id');
      this.course = this.courseService.courses.find(x => x.id == this.courseId);
    });

    // get the query param value ngOnInit() only run once so use observable
    
    this.activatedRoute.queryParamMap.subscribe((param) => {
      this.editMode = Boolean(param.get('edit'));
    })
  }

  ngOnDestroy() {
    this.routeParamObs.unsubscribe();
  }

  appendQueryParam() {
    this.router.navigate(['/Courses/Course', this.courseId], {queryParams: {edit: true}})
  }
  
}
