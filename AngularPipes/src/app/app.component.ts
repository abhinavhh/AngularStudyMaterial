import { Component, OnInit } from '@angular/core';
import { Student } from './student';
import { StudentService } from './students.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AngularPipes';
  students: Student[] = [];
  totalMarks: number = 0;
  _filterText: string = '';
  filteredStudents!: Student[];
  totalStudent = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(this.filteredStudents.length);
    }, 2000)
  });

  get filterText() {
    return this._filterText;
  }

  set filterText(value: string) {
    this._filterText = value;
    this.filteredStudents = this.filterStudentByGender(this._filterText);
  }

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.students = this.studentService.students;
    this.totalMarks = this.studentService.totalMarks;
    this.filteredStudents = this. students;
  }

  addDummyStudent() {
    // let studentCopy = Object.assign([], this.students);
    // studentCopy.push({name: "TEST", marks: 500, dob: new Date(), course: "TEST", gender: 'female'});
    // this.students = studentCopy;
    this.students.push({name: "TEST", marks: 500, dob: new Date(), course: "TEST", gender: 'female'});
    this.filteredStudents = this.filterStudentByGender(this._filterText);
  }
  changeGender() {
    let studentCopy: Student[] = Object.assign([], this.students);
    studentCopy[0].gender = 'female';
    this.students = studentCopy;
    this.filteredStudents = this.filterStudentByGender(this._filterText);
  }
  filterStudentByGender(filterTerm: string) {
    if(this.students.length === 0 || filterTerm === '') {
        return this.students;
    }
    else {
        return this.students.filter((student) => {
            return student.gender.toLowerCase() === filterTerm.toLowerCase()
        })
    }
  }
}
