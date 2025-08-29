# Complete Guide to Angular Routing

## What is Angular Routing?

Angular Router is a powerful navigation system that enables you to navigate between different components through URL routes. It allows users to move between views in a Single Page Application (SPA) without full page reloads.

## Setting Up Angular Routing

### Step 1: Create Components

First, create the components you want to navigate between:

```bash
ng generate component home
ng generate component about
ng generate component contact
ng generate component courses
ng generate component page-not-found
```

### Step 2: Define Routes in app.module.ts

Create a routes configuration array that maps URLs to components:

```typescript
// app.module.ts
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { CoursesComponent } from "./courses/courses.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

// Define your routes
const appRoutes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" }, // Default route
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "courses", component: CoursesComponent },
  { path: "**", component: PageNotFoundComponent }, // Wildcard route (404)
];

@NgModule({
  declarations: [AppComponent, HomeComponent, AboutComponent, ContactComponent, CoursesComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes), // Configure the router
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

### Step 3: Add Router Outlet

In your `app.component.html`, add the `<router-outlet>` tag where you want routed components to be displayed:

```html
<!-- app.component.html -->
<nav>
  <ul>
    <li><a routerLink="/home">Home</a></li>
    <li><a routerLink="/about">About</a></li>
    <li><a routerLink="/contact">Contact</a></li>
    <li><a routerLink="/courses">Courses</a></li>
  </ul>
</nav>

<!-- This is where routed components will be displayed -->
<router-outlet></router-outlet>
```

## Route Configuration Options

### Basic Route Structure

```typescript
{
  path: 'route-path',        // URL path
  component: ComponentName,   // Component to display
  data: { title: 'Page' },   // Optional static data
  canActivate: [AuthGuard]    // Optional route guards
}
```

### Default Route Configuration

#### Option 1: Direct Component Assignment

```typescript
{ path: '', component: HomeComponent }
```

#### Option 2: Redirect to Another Route (Recommended)

```typescript
{
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
}
```

**Why use `pathMatch: 'full'`?**

- Ensures the redirect only happens when the path is completely empty
- Prevents unintended redirects for partial matches

### Wildcard Route (404 Page)

```typescript
// Must be the LAST route in the array
{ path: '**', component: PageNotFoundComponent }
```

## Navigation Methods

### 1. Using routerLink Directive (Recommended)

```html
<!-- Static routes -->
<a routerLink="/home">Home</a>
<a routerLink="/about">About</a>

<!-- Dynamic routes with parameters -->
<a [routerLink]="['/user', userId]">User Profile</a>

<!-- Routes with query parameters -->
<a [routerLink]="['/search']" [queryParams]="{q: 'angular', category: 'web'}">Search</a>
```

### 2. Using href (Not Recommended)

```html
<!-- This will cause a full page reload -->
<a href="/home">Home</a>
```

**Why routerLink is better:**

- No page reload
- Maintains application state
- Better performance
- Supports Angular features like route guards

_We can use routerLinkActive to mark the active link_

```html
<li [routerLinkActive]="'active'"><a></a></li>
```

`Note: This active is a css class we created inside the app.css file`

### 3. Programmatic Navigation

```typescript
// In your component
import { Router } from "@angular/router";

export class MyComponent {
  constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigate(["/home"]);
  }

  navigateWithParams() {
    this.router.navigate(["/user", 123]);
  }

  navigateWithQueryParams() {
    this.router.navigate(["/search"], {
      queryParams: { q: "angular", category: "web" },
    });
  }
}
```

## Advanced Routing Features

### Route Parameters

#### Defining Parameterized Routes

```typescript
const routes: Routes = [
  { path: "user/:id", component: UserComponent },
  { path: "product/:id/:category", component: ProductComponent },
];
```

#### Accessing Route Parameters

```typescript
// user.component.ts
import { ActivatedRoute } from "@angular/router";

export class UserComponent implements OnInit {
  userId: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Get parameter from URL
    this.userId = this.route.snapshot.paramMap.get("id");

    // Or subscribe to parameter changes
    this.route.paramMap.subscribe((params) => {
      this.userId = params.get("id");
    });
  }
}
```

### Query Parameters and Fragments

#### Setting Query Parameters

```html
<!-- Template -->
<a [routerLink]="['/search']" [queryParams]="{page: 1, size: 10}" fragment="top">Search Results</a>
```

```typescript
// Component
this.router.navigate(["/search"], {
  queryParams: { page: 1, size: 10 },
  fragment: "top",
});
```

#### Reading Query Parameters

```typescript
export class SearchComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Get query parameters
    this.route.queryParamMap.subscribe((params) => {
      const page = params.get("page") || 1;
      const size = params.get("size") || 10;
    });

    // Get fragment
    this.route.fragment.subscribe((fragment) => {
      console.log("Fragment:", fragment);
    });
  }
}
```

### Nested Routes (Child Routes)

```typescript
const routes: Routes = [
  {
    path: "products",
    component: ProductsComponent,
    children: [
      { path: "", component: ProductListComponent },
      { path: ":id", component: ProductDetailComponent },
      { path: ":id/edit", component: ProductEditComponent },
    ],
  },
];
```

```html
<!-- products.component.html -->
<h2>Products</h2>
<nav>
  <a routerLink="./list">List</a>
  <a routerLink="./featured">Featured</a>
</nav>
<router-outlet></router-outlet>
<!-- Child components render here -->
```

## Absolute and Relative Routing

- "/Home" is a absolute path
- "Home" is a relative path

`Relative path: Path gets appended to the current path -> localhost:4800/About/Home`

`Absolute path: Path starts from the begining of the url -> localhost:4800/Home`

## Active Route Styling

### Using routerLinkActive

```html
<nav>
  <a routerLink="/home" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a>
  <a routerLink="/about" routerLinkActive="active">About</a>
  <a routerLink="/contact" routerLinkActive="active highlight">Contact</a>
</nav>
```

```css
/* styles.css */
.active {
  font-weight: bold;
  color: #007bff;
}

.highlight {
  background-color: #f8f9fa;
}
```

## Complete Example

### app-routing.module.ts (Separate Routing Module)

```typescript
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { CoursesComponent } from "./courses/courses.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "courses", component: CoursesComponent },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

### app.component.html

```html
<header>
  <nav class="navbar">
    <div class="nav-brand">
      <h1>My Angular App</h1>
    </div>
    <ul class="nav-links">
      <li>
        <a routerLink="/home" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"> Home </a>
      </li>
      <li>
        <a routerLink="/about" routerLinkActive="active">About</a>
      </li>
      <li>
        <a routerLink="/contact" routerLinkActive="active">Contact</a>
      </li>
      <li>
        <a routerLink="/courses" routerLinkActive="active">Courses</a>
      </li>
    </ul>
  </nav>
</header>

<main>
  <router-outlet></router-outlet>
</main>

<footer>
  <p>&copy; 2024 My Angular App</p>
</footer>
```

## Best Practices

### 1. Separate Routing Module

Create a dedicated `app-routing.module.ts` for better organization:

```typescript
// Import in app.module.ts
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [AppRoutingModule],
  // ...
})
```

### 2. Route Order Matters

- More specific routes first
- Wildcard route (`**`) must be last

## Navigate Between Routes

- create a Routers instance
- two methods
  `navigate() and navigateUrl()`

```typescript
router.navigate(["Home"]);
```

`Note: navigate() can be used to append to the currently active route by using ActivatedRoute instance`

```typescript
router.navigate(["Home"], { relativeTo: this.activatedRoute });
```

_Alternate_

```typescript
router.navigateUrl("Home");
```

## Passing Parameters to Routes

Create the new route in module:

```typescript
{path: 'Courses/Course/:id', component: CourseComponent}
```

Navigate to the route with parameter:

```typescript
router.navigate(["Courses/Course", id]);
```

## Using Observable to Retrieve Route Parameters

We can use observable to retrieve parameters from the route to display specific data.

Example: `/Courses/` → select a course → `/Courses/Course/courseid`

```typescript
ngOnInit() {
  this.activatedRoute.paramMap.subscribe((param) => {
    this.courseId = param.get("id");
    this.course = this.courseService.courses.find((x) => x.id == this.courseId);
  });
}
```

- Display the course data in the view using interpolation or property binding

## Passing Query Parameters to Route

We can pass query parameters to the route URL so that we can access those params for any use.

- We can do this when an event happens or a page loads.

**Consider that we need to add a edit=true value to the query param when clicking on a button:**

Step 1: Create a button which calls a function upon click
Step 2: Within the function create a router instance
Step 3: Using the navigate method in the router, specify the route and the queryParams using the "queryParams" property

```typescript
router.navigate(["/Courses/Course", courseId], {
  queryParams: { edit: true },
});
```

Step 4: Access this query param using an ActivatedRoute instance's queryParamMap using observable (subscribe()) method

```typescript
ngOnInit() {
  this.activatedRoute.queryParamMap.subscribe((param) => {
    this.easyMode = Boolean(param.get('edit'));
  });
}
```

## Passing Fragments to the Route

If you have home, about, etc. displayed on the same page one below the other, we can use fragments for smooth scroll navigation to the sections when clicking on the navlink text.

**Note:** Remove the routerLink="" values (make it blank), remove the `/Home` route config for the `/`

**Step 1:** Create the sections and the navlinks
**Step 2:** For each component create an id attribute
**Note:** This id attribute value is used to scroll to the section
**Step 3:** Create the fragment attribute on the navlinks and give them the value same as the id of corresponding component

```html
<li>
  <a [routerLink]="[]" fragment="home">HOME</a>
</li>
<app-home id="home"></app-home>
```

**Step 4:** At the app.ts file use observable to access the fragment when clicking on the navigation

```typescript
ngOnInit() {
  this.activatedRoute.fragment.subscribe((value) => {
    if (value) {
      this.jumpTo(value);
    }
  });
}

jumpTo(section: string) {
  document.getElementById(section)?.scrollIntoView({behavior: 'smooth'});
}
```

## Child Routes

Child routes allow you to create nested routing structures where components can have their own sub-routes.

**Configuration:**

```typescript
const routes: Routes = [
  {
    path: "parent",
    component: ParentComponent,
    children: [
      { path: "child1", component: Child1Component },
      { path: "child2", component: Child2Component },
      { path: "", redirectTo: "child1", pathMatch: "full" },
    ],
  },
];
```

**Parent Component Template:**

```html
<div>
  <h2>Parent Component</h2>
  <nav>
    <a routerLink="child1">Child 1</a>
    <a routerLink="child2">Child 2</a>
  </nav>
  <router-outlet></router-outlet>
</div>
```

## Route Guards

Angular Route guards can be used to control whether the user can navigate to or away from the given route based on some condition.

### CanActivate Route Guard

CanActivate guard determines if a route can be activated (navigated to).

**Creating an Auth Guard:**

```typescript
@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(["/login"]);
      return false;
    }
  }
}
```

**Using the Guard:**

```typescript
{
  path: 'protected',
  component: ProtectedComponent,
  canActivate: [AuthGuard]
}
```

**AuthService Setup:**

```typescript
@Injectable({
  providedIn: "root",
})
export class AuthService {
  private isLoggedIn = false;

  login() {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}
```

### CanActivateChild Route Guard

CanActivateChild guard determines if child routes can be activated.

**Creating CanActivateChild Guard:**

```typescript
@Injectable({
  providedIn: "root",
})
export class ChildAuthGuard implements CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}

  canActivateChild(): boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(["/login"]);
      return false;
    }
  }
}
```

**Using CanActivateChild Guard:**

```typescript
{
  path: 'parent',
  component: ParentComponent,
  canActivateChild: [ChildAuthGuard],
  children: [
    { path: 'child1', component: Child1Component },
    { path: 'child2', component: Child2Component }
  ]
}
```

**Using CanDeactivate Guard:**

The CanDeactivate guard decides whether a user can navigate away from a route.
It is useful when you want to prevent the user from accidentally losing unsaved changes.

_Example Use Case_

User types something in the Contact page (like name, email, or message).

Before clicking Send Message, the user tries to navigate to another route (e.g., Home, About, Courses).

The CanDeactivate guard asks:
“You have unsaved changes. Do you really want to leave?”

If the user confirms → navigation continues.
If the user cancels → navigation is blocked.

Steps

1. Create a CanDeactivate interface

```typescript
export interface CanComponentDeactivate {
  canExit: () => boolean | Promise<boolean>;
}
```

2. Create the Guard Service

```typescript
import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";
import { CanComponentDeactivate } from "./can-component-deactivate";

@Injectable({
  providedIn: "root",
})
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(component: CanComponentDeactivate): boolean | Promise<boolean> {
    return component.canExit ? component.canExit() : true;
  }
}
```

3. Implement canExit in your Component

```typescript
import { Component } from "@angular/core";
import { CanComponentDeactivate } from "../guards/can-component-deactivate";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
})
export class ContactComponent implements CanComponentDeactivate {
  username: string = "";
  usermail: string = "";
  message: string = "";

  canExit(): boolean {
    if (this.username || this.usermail || this.message) {
      return confirm("You have unsaved changes. Do you really want to discard them?");
    }
    return true;
  }
}
```

4. Register the Guard in the Routes

```typescript
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactComponent } from "./contact/contact.component";
import { CanDeactivateGuard } from "./guards/can-deactivate.guard";

const routes: Routes = [
  { path: "contact", component: ContactComponent, canDeactivate: [CanDeactivateGuard] },
  { path: "home", component: HomeComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "**", component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

**Resolve Route Guard**

The Resolve Guard (Resolve<T>) is used to fetch data before navigating to a route.
It ensures that the route is only activated once the required data is available.

_Example: Courses Page_

We want to load the list of courses before navigating to the CoursesComponent.

1. Create a getAllCourse method (courses.service.ts)

This service will fetch courses from API or return a Promise with dummy data.

```typescript

export class CoursesService {
  getAllCourse(): Promise<any[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
          resolve(this.courses);
        ]);
      }, 1000);
    });
  }
}
```

2. Create a Resolver (course-resolve.service.ts)

- Implements the Resolve interface.

```typescript
export class CourseResolveService implements Resolve<any> {
  constructor(private courseService: CoursesService) {}

  resolve() {
    return this.courseService.getAllCourse().then((data) => {
      return data;
    });
  }
}
```

3. Update Routes (app-routing.module.ts)

```typescript
const routes: Routes = [
  {
    path: "Courses",
    component: CoursesComponent,
    resolve: { courses: CourseResolveService },
  },
];
```

4. Access Resolved Data (courses.component.ts)

```typescript
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-courses",
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.css"],
})
export class CoursesComponent implements OnInit {
  courses: any[] = [];

  constructor(private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.courses = this.activeRoute.snapshot.data["courses"];
  }
}
```
**Navigation Events**

Loading Indicator when navigation changes

router: Router

router instanceOf NavigationEnd, NavigationStart, NavigationCancel, NavigationError.