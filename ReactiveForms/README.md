# Reactive Forms in Angular

Reactive Forms provide a model-driven way to handle form inputs in Angular. Instead of relying on Angular’s template-driven approach, we define the form structure in the component class and bind it to the template.

## Steps to Create a Reactive Form

1. Import ReactiveFormsModule

Add it to the `imports` array of your feature/module:

```typescript
import { ReactiveFormsModule } from "@angular/forms";
```

2. Create a FormGroup instance in your component

- A FormGroup represents the entire form.

- Inside it, each FormControl represents a field.

- You can also set default values here.

```typescript
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-user-form",
  templateUrl: "./user-form.component.html",
})
export class UserFormComponent implements OnInit {
  reactiveForm!: FormGroup;

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      firstName: new FormControl(""),
      lastName: new FormControl(""),
      email: new FormControl(""),
      gender: new FormControl("male"), // default value
      country: new FormControl(""),
      hobbies: new FormControl([]), // array for multiple selections
    });
  }

  onSubmit() {
    console.log(this.reactiveForm.value); // Access submitted form data
  }
}
```

3. Bind FormGroup and FormControl in the template

Use `formGroup` on the `<form>` and `formControlName` on each input.

```html
<form [formGroup]="reactiveForm" (ngSubmit)="onSubmit()">
  <input type="text" formControlName="firstName" placeholder="First Name" />
  <input type="text" formControlName="lastName" placeholder="Last Name" />
  <input type="email" formControlName="email" placeholder="Email" />

  <!-- Radio Example -->
  <label> <input type="radio" formControlName="gender" value="male" /> Male </label>
  <label> <input type="radio" formControlName="gender" value="female" /> Female </label>

  <!-- Select Example -->
  <select formControlName="country">
    <option value="">Select Country</option>
    <option value="us">United States</option>
    <option value="in">India</option>
  </select>

  <!-- Checkbox Example -->
  <label>
    <input type="checkbox" value="sports" (change)="onHobbyChange($event)" [checked]="reactiveForm.get('hobbies')?.value.includes('sports')" />
    Sports
  </label>

  <button type="submit">Submit</button>
</form>
```

4. Handling checkbox selections

Since checkboxes may store multiple values, update them manually inside the component:

```typescript
onHobbyChange(event: any) {
const hobbies = this.reactiveForm.get('hobbies')?.value || [];
if (event.target.checked) {
this.reactiveForm.get('hobbies')?.setValue([...hobbies, event.target.value]);
} else {
this.reactiveForm.get('hobbies')?.setValue(
hobbies.filter((h: string) => h !== event.target.value)
);
}
}
```

## Key Notes for Beginners

- Always create a FormGroup in the component before binding in the template.

- The name in formControlName must match the key in your FormGroup.

- Default values are set directly when creating FormControl.

- You don’t need template references (#form="ngForm") like template-driven forms — just use your FormGroup instance.

- Use (ngSubmit) to trigger form submission.

# Reactive Form Validation

Using Validators available and using it in the ts file

```typescript
firstName: new FormControl(null, [Validators.required]);
```

## Grouping of Form Control in Reactive Form

We do this in typescript class

this.reactiveForm = new FormGroup({
personalDetails: new FormGroup({
firstName: new FormControl(null, Validators.required),
lastName: new FormControl(null, Validators.required),
email: new FormControl(null, [Validators.required, Validators.email]),
}),

      gender: new FormControl('male'),
      country: new FormControl('india'),
      hobbies: new FormControl(null),
    })

}

- in hmtl make firstname, secondName , email in the same div and formControName property of that div is assigned to 'personalDetails'.

ngIf is used to give invalid message

`ngIf="!reactiveForms.get('personalDetails.email').valid && reactiveForms.get('personalDetails.email').touched"`

## Form Array in Reative Form

form array is a way to manage the collection of Form Controls in Angular. The controls can be a FormGroup, FormControl, or another FormArray.

