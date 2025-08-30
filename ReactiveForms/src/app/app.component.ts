import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
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

  constructor() {}

  ngOnInit(): void {
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

  onSubmit(): void {
    console.log(this.reactiveForm);
  }

}