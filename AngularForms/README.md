# Angular Template-driven Forms Documentation
## 1. Importing FormsModule

To use template-driven forms, you must import FormsModule into your Angular application module:
```typescript
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [FormsModule]
})
export class AppModule {}
```

## 2. Creating a Local Reference for the Form

In the template, assign a local reference variable to the form using the ngForm directive:

```html
<form #myForm="ngForm" (ngSubmit)="onSubmit(myForm)">
  ...
</form>
```

- Here, #myForm="ngForm" creates a reference to the form.

- The reference is of type NgForm.

- The form can then be passed to the component method on submit (onSubmit(myForm)).

## 3. Using ngModel on Form Controls

Each input element must use the ngModel directive to bind its value to Angular’s form model:
```html
<input name="firstName" ngModel />
<input name="lastName" ngModel />
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