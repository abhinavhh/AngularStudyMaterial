import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  reactiveForm!: FormGroup;
  
  countries = [
    { value: 'india', label: 'India' },
    { value: 'usa', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'canada', label: 'Canada' },
    { value: 'australia', label: 'Australia' },
    { value: 'germany', label: 'Germany' },
    { value: 'france', label: 'France' },
    { value: 'japan', label: 'Japan' }
  ];

  hobbiesOptions = [
    { value: 'sports', label: 'Sports' },
    { value: 'music', label: 'Music' },
    { value: 'travel', label: 'Travel' },
    { value: 'reading', label: 'Reading' },
    { value: 'cooking', label: 'Cooking' },
    { value: 'photography', label: 'Photography' }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      firstName: new FormControl(null),
      lastName: new FormControl(null),
      email: new FormControl(null),
      gender: new FormControl('male'),
      country: new FormControl('india'),
      hobbies: new FormControl(null),
    })
  }

  initializeForm(): void {
    this.reactiveForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      country: ['', Validators.required],
      hobbies: this.fb.array([], Validators.required)
    });
  }

  get hobbiesFormArray(): FormArray {
    return this.reactiveForm.get('hobbies') as FormArray;
  }

  onHobbyChange(event: any): void {
    const hobbiesArray = this.hobbiesFormArray;
    
    if (event.target.checked) {
      hobbiesArray.push(this.fb.control(event.target.value));
    } else {
      const index = hobbiesArray.controls.findIndex(
        control => control.value === event.target.value
      );
      if (index >= 0) {
        hobbiesArray.removeAt(index);
      }
    }
  }

  isHobbySelected(hobby: string): boolean {
    return this.hobbiesFormArray.value.includes(hobby);
  }

  onSubmit(): void {
    console.log(this.reactiveForm);
  }

  private markFormGroupTouched(): void {
    Object.keys(this.reactiveForm.controls).forEach(key => {
      const control = this.reactiveForm.get(key);
      control?.markAsTouched();
    });
  }

  // Helper methods for template
  isFieldInvalid(fieldName: string): boolean {
    const field = this.reactiveForm.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }

  getFieldError(fieldName: string): string {
    const field = this.reactiveForm.get(fieldName);
    
    if (field?.errors) {
      if (field.errors['required']) {
        return `${this.getFieldLabel(fieldName)} is required`;
      }
      if (field.errors['email']) {
        return 'Please enter a valid email address';
      }
      if (field.errors['minlength']) {
        return `${this.getFieldLabel(fieldName)} must be at least ${field.errors['minlength'].requiredLength} characters`;
      }
    }
    return '';
  }

  private getFieldLabel(fieldName: string): string {
    const labels: { [key: string]: string } = {
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email',
      gender: 'Gender',
      country: 'Country',
      hobbies: 'Hobbies'
    };
    return labels[fieldName] || fieldName;
  }
}