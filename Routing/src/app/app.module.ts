import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';

import { ErropageComponent } from './erropage/erropage.component';
import { CourseComponent } from './courses/course/course.component';
import { CourseService } from './services/courses.service';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module.';
import { CourseGuardService } from './services/course-guard.service';
import { AuthService } from './services/auth.service';
import { CanDeactivateGuardService } from './services/candeactivate-guard.service';
import { CourseResolveService } from './services/course-resolve.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    CoursesComponent,
    HomeComponent,
    ErropageComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [CourseService, CourseGuardService, AuthService, CanDeactivateGuardService, CourseResolveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
