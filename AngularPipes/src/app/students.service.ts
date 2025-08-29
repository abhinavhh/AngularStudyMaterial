import { Student } from "./student";

export class StudentService {
    students: Student[] = [
        {
            name: "Abhinav Kumar",
            course: "Angular",
            marks: 85,
            dob: new Date("2000-05-14"),
            gender: "Male"
        },
        {
            name: "Sneha Sharma",
            course: "React",
            marks: 92,
            dob: new Date("1999-11-20"),
            gender: "Female"
        },
        {
            name: "Rohit Mehta",
            course: "Node.js",
            marks: 76,
            dob: new Date("2001-03-02"),
            gender: "Male"
        },
        {
            name: "Priya Singh",
            course: "Python",
            marks: 88.6,
            dob: new Date("1998-07-18"),
            gender: "Female"
        },
        {
            name: "Arjun Verma",
            course: "Java",
            marks: 95,
            dob: new Date("2000-01-10"),
            gender: "Male"
        },
        {
            name: "Kavya Nair",
            course: "C++",
            marks: 81,
            dob: new Date("2002-09-25"),
            gender: "Female"
        }
    ];
    totalMarks: number = 100;
}