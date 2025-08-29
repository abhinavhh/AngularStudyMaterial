import { NgModule } from '@angular/core';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';

import { RouterModule, Routes } from '@angular/router';
import { ErropageComponent } from './erropage/erropage.component';
import { CourseComponent } from './courses/course/course.component';
import { CourseGuardService } from './services/course-guard.service';
import { CanDeactivateGuardService } from './services/candeactivate-guard.service';
import { CourseResolveService } from './services/course-resolve.service';

const appRoute: Routes = [
//   {path: '', redirectTo: '', pathMatch: 'full'},
  {path: '', component: HomeComponent},
  {path: 'About', component: AboutComponent},
  
  {path: 'Contact', canDeactivate: [CanDeactivateGuardService], component: ContactComponent},

  //  CAN ACTIVATE
  // {path: 'Courses', component: CoursesComponent, canActivate: [CourseGuardService]},

  // CANACTIVATECHILD
  {path: 'Courses', component: CoursesComponent, resolve: {courses: CourseResolveService}},
  {path: 'Courses', canActivateChild: [CourseGuardService], children: [
    {path: 'Course/:id', component: CourseComponent}
  ]},
  // {path: 'Courses/Course/:id', component: CourseComponent},
  {path: '**', component: ErropageComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoute, {enableTracing: true}),
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}