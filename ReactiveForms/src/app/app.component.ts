import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';

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
  formStatus!: any;
  
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
        firstName: new FormControl(null, [Validators.required, this.noSpaceAllowed]),
        lastName: new FormControl(null, [Validators.required, this.noSpaceAllowed]),
        email: new FormControl(null, [Validators.required, Validators.email, this.noSpaceAllowed], this.emailNotAllowed),
      }),
      
      gender: new FormControl('male'),
      country: new FormControl('india'),
      hobbies: new FormControl(null),
      skills: new FormArray([
        new FormControl(null, Validators.required),
      ]),
    })

    // LISTEN TO VALUECHANGE OF FIRSTNAME
    // this.reactiveForm.get('personalDetails.firstName')?.valueChanges.subscribe((value) => {
    //   console.log(value);
    // })
    // LISTEN TO VALUE CHANGE OF FORMGROUP
    // this.reactiveForm.get('personalDetails')?.valueChanges.subscribe((value) => {
    //   console.log(value);
    // })

    // STATUS CHANGE
    this.reactiveForm.statusChanges.subscribe((value) => {
      console.log(value);
      this.formStatus = value;
    })

    // SETVALUE
    // setTimeout(() => {

    //   this.reactiveForm.setValue({
    //     personalDetails: {
    //       firstName: 'john',
    //       lastName: 'cena',
    //       email: 'abc@example.com',
    //     },
    //     gender: '',
    //     country: 'india',
    //     hobbies: '',
    //     skills: []
    //   })
    // }, 1000)

    // PATCHVALUE ( ONLY FOR THE PROPERTY WE NEED A DEFAULT VALUE )
    setTimeout(() => {

      this.reactiveForm.patchValue({
        personalDetails: {
          email: 'abc@example.com',
        },
        gender: 'male',
        country: 'india',
        
      })
    }, 1000);
    
  }

  onSubmit(): void {
    console.log(this.reactiveForm);
    this.reactiveForm.reset({
      personalDetails: {
          firstName: '',
          lastName: '',
          email: 'abc@example.com',
        },
        gender: 'male',
        country: 'india',
        hobbies: '',
        skills: []
    });
  }

  get skills(): FormArray {
    return this.reactiveForm.get('skills') as FormArray;
  }

  addSkills() {
    (<FormArray>this.reactiveForm.get('skills')).push(new FormControl(null, Validators.required));
  }

  noSpaceAllowed(control: AbstractControl) {
    if(control.value != null && control.value.indexOf(' ') != -1) {
      return {noSpaceAllowed: true}
    }
    return null;
  }

  // CUTOM ASYNC VALIDATOR
  emailNotAllowed(control: AbstractControl): Promise<any> | Observable<any> 
  {
    const response = new Promise((resolve, reject) => {
      setTimeout(() => {
        if(control.value === 'abhinavponnu964531@gmail.com'){
          resolve({emailNotAllowed: true})
        }
        else{
          resolve(null);
        }
      }, 2000)
    })
    return response;
  }

}