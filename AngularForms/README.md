# Angular Template-driven Forms Documentation

## 1. Importing FormsModule

To use template-driven forms, you must import FormsModule into your Angular application module:

```typescript
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [FormsModule],
})
export class AppModule {}
```

## 2. Creating a Local Reference for the Form

In the template, assign a local reference variable to the form using the ngForm directive:

```html
<form #myForm="ngForm" (ngSubmit)="onSubmit(myForm)">...</form>
```

- Here, #myForm="ngForm" creates a reference to the form.

- The reference is of type NgForm.

- The form can then be passed to the component method on submit (onSubmit(myForm)).

## 3. Using ngModel on Form Controls

Each input element must use the ngModel directive to bind its value to Angular’s form model:

```html
<input name="firstName" ngModel /> <input name="lastName" ngModel />
```

- Always provide a name attribute when using ngModel.

- This allows Angular to register the input as a control inside the form.

## 4. Accessing the Form in the Component

There are two ways to access the form in your component:

(a) By passing the local reference

```typescript
onSubmit(form: NgForm) {
  console.log(form.value);
}
```

(b) By using @ViewChild

Instead of passing the reference, you can access the form directly:

```typescript
@ViewChild('myForm') form!: NgForm;

onSubmit() {
  console.log(this.form.value);
}
```

## Form Validation

### 1. Built-in Validators

Angular provides built-in validation directives that can be used directly in the template:

- `required` → Ensures the field is not empty

- `email` → Ensures the input is a valid email format

Example:

```typescript
<input name="email" type="email" ngModel required email />
```

### 2. Disabling Submit Button

You can disable the submit button until the form becomes valid.
Bind the `disabled` property to the form reference’s `invalid` property:

```typescript
<button type="submit" [disabled]="myForm.invalid">Submit</button>
```

### 3. Styling Invalid Fields

You can style invalid fields using Angular’s CSS classes:

```css
input.ng-invalid.ng-touched {
  border: 1px solid red;
}
```

`ng-invalid` → applied when a field is invalid

`ng-touched` → applied when the user has interacted with the field

### 4. Using Reference Variables for Controls

You can create a reference variable on an input by assigning it `ngModel`:

```html
<input name="firstName" ngModel required #firstName="ngModel" />
```

Here, `#firstName="ngModel"` exposes the state of that control.

### 5. Showing Validation Messages

With the reference variable, you can check control states (`touched`, `invalid`, etc.) and display validation messages:

```html
<div *ngIf="firstName.invalid && firstName.touched">
  <small>This field is required.</small>
</div>
```

### 6. Setting Default Values with ngModel

You can set default values in two ways:

(a) Directly in the template:

```html
<input name="country" ngModel="India" />
```

(b) Through the component:

```typescript
user = { country: "India" };
```

```html
<input name="country" [(ngModel)]="user.country" />
```

## Form Control Group

`ngModelGroup` is used to group input elements inside a container.
It creates a collection of form controls and tracks both the value and validity state of the entire group.

- Use ngModelGroup="personalDetails" to define the group.

- Assign a reference variable: #personalDetails="ngModelGroup".

- You can then access the group’s state with:

-- personalDetails.value → gets the values of all -- controls inside the group.

-- personalDetails.valid / personalDetails.invalid → validity of the group.

-- personalDetails.touched / personalDetails.untouched → touched state of the group.

-- personalDetails.dirty / personalDetails.pristine → change state of the group.

👉 Example:

```html
<div ngModelGroup="personalDetails" #personalDetails="ngModelGroup">
  <label>First Name</label>
  <input name="fname" ngModel required />

  <label>Last Name</label>
  <input name="lname" ngModel required />
</div>

<!-- Show error if group is invalid -->
<div *ngIf="personalDetails.invalid && personalDetails.touched">
  <small>Personal details are required.</small>
</div>
```
## Work with template radio button

We can create and bind radio buttons in Angular template-driven forms in two ways:

Using <input type="radio"> directly with [(ngModel)]

Without explicit <input type="radio">, by binding a property in the component and updating it programmatically

Example: Using [(ngModel)]
<div class="form-group">
  <label>Gender</label>
  <label>
    <input type="radio" name="gender" value="male" [(ngModel)]="userDetails.gender" required />
    Male
  </label>
  <label>
    <input type="radio" name="gender" value="female" [(ngModel)]="userDetails.gender" />
    Female
  </label>
  <label>
    <input type="radio" name="gender" value="other" [(ngModel)]="userDetails.gender" />
    Other
  </label>
</div>


Here, the property userDetails.gender in the TypeScript class will automatically update whenever the user selects a radio option.

Example: Without Explicit <input type="radio">

Instead of actual <input type="radio">, you can toggle a class (active/inactive) and set the property:

<div class="gender-options">
  <span (click)="userDetails.gender = 'male'" 
        [class.active]="userDetails.gender === 'male'">Male</span>
  <span (click)="userDetails.gender = 'female'" 
        [class.active]="userDetails.gender === 'female'">Female</span>
  <span (click)="userDetails.gender = 'other'" 
        [class.active]="userDetails.gender === 'other'">Other</span>
</div>


In this case, the userDetails.gender is updated manually.

.gender-options span {
  padding: 6px 12px;
  border: 1px solid #ccc;
  margin-right: 8px;
  cursor: pointer;
  border-radius: 4px;
}
.gender-options span.active {
  background-color: #007bff;
  color: #fff;
}

setValue() and patchValue()

Both are used to programmatically set form values, but with differences:

setValue() → Must provide all controls in the form.

patchValue() → Can update only a subset of controls.

✅ Example:

// setValue → must set every control

```typescript
this.form.setValue({
  country: 'india',
  gender: 'male',
  hobbies: ['sports'],
  personalDetails: {
    firstName: 'John',
    lastName: 'Smith',
    email: 'john.smith@gmail.com'
  }
});
```

// patchValue → update only specific controls

```typescript
this.form.form.patchValue({
  personalDetails: {
    firstName: 'Abhinav'
  },
  gender: 'other'
});'
```

Accessing Values

Once the form is submitted or during debugging, you can access values like:

console.log(this.form.value);  


Example structure of this.form.value:

{
  "personalDetails": {
    "firstName": "John",
    "lastName": "Smith",
    "email": "john@gmail.com"
  },
  "country": "india",
  "gender": "male",
  "hobbies": ["sports", "music"]
}


To access a specific field:

this.form.value.personalDetails.firstName
this.form.value.gender
this.form.value.hobbies


# Reactive Form

We define the structure of the form in the component class. We create the form model with Form Groups, Form Controls, and Form Arrays.

- We define the validation rule in component class
- Then bind it into the HTML form in the template.
