import { NgFor } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularForms';
  submitted: boolean = false;
  defaultGender = 'male';
  userDetails: {fname?: string, lname?: string, gender?: string, hobbies?:string, email?: string, country?: string} = {};


  gender = [
    {id: '1', value: 'male'},
    {id: '2', value: 'female'},
    {id: '3', value: 'other'},
  ]
  @ViewChild('myForm') form!: NgForm;

  onSubmit() {
    console.log(this.form);
    this.userDetails = {
      fname: this.form.value.personalDetails.firstName,
      lname: this.form.value.personalDetails.lastName,
      email: this.form.value.personalDetails.email,
      gender: this.form.value.gender,
      country: this.form.value.country,
      hobbies: this.form.value.hobbies,
    }
    // this.submitted = true;
    this.form.reset();
  }

  setDefaultValues() {

    // this.form.value.personalDetails.firstName = 'John';
    // this.form.value.personalDetails.lastName = 'Coy';
    // this.form.value.personalDetails.lastName = 'johncena123@gmail.com';


    // this.form.setValue({
    //   country: '',
    //   gender: '',
    //   hobbies: '',
    //   personalDetails: {
    //     firstName: 'John',
    //     lastName: 'Smith',
    //     email: 'johncena123@gmail.com'
    //   }
    // })

    this.form.form.patchValue({
      personalDetails: {
        firstName:'John',
        lastName: 'Cena',
        email: 'johncena@gmail.com',
      }
    })
  }
}
