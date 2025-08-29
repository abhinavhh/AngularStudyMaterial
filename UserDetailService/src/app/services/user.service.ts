import { EventEmitter } from "@angular/core";

export class UserService {
    users = [
        {
        name: "Abhinav U",
        job: "Software Engineer",
        gender: "Male",
        country: "India",
        age: 22,
        avatar: "https://randomuser.me/api/portraits/men/75.jpg"
        },
        {
        name: "Sophia Johnson",
        job: "UI/UX Designer",
        gender: "Female",
        country: "USA",
        age: 29,
        avatar: "https://randomuser.me/api/portraits/women/45.jpg"
        },
        {
        name: "Liam Brown",
        job: "Data Scientist",
        gender: "Male",
        country: "Canada",
        age: 32,
        avatar: "https://randomuser.me/api/portraits/men/34.jpg"
        },
        {
        name: "Emma Davis",
        job: "Product Manager",
        gender: "Female",
        country: "UK",
        age: 28,
        avatar: "https://randomuser.me/api/portraits/women/68.jpg"
        },
        {
        name: "Noah Smith",
        job: "DevOps Engineer",
        gender: "Male",
        country: "Australia",
        age: 30,
        avatar: "https://randomuser.me/api/portraits/men/21.jpg"
        }
    ];

    onShowDetailsClicked = new EventEmitter<{name: string, job: string, gender: string, country: string, age: number, avatar: string}>();

    showUserDetails(user: {name: string, job: string, gender: string, country: string, age: number, avatar: string}) {
        this.onShowDetailsClicked.emit(user);
    }

}