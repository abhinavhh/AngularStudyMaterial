import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit{
  constructor(private courseService: CourseService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    // this.courses = this.courseService.courses;

    // Resolve Route

    // this.courseService.getAllCourses().then((data) => {
    //   this.courses = data;
    // })

    this.courses = this.route.snapshot.data['courses'];
  }
  
  courses: {id: number, title: string, description: string, image: string, author: string, duration: string, type: string, price: number}[] = [];

  showDetails(id: number) {
    this.router.navigate(['/Courses/Course', id])
  }
}
