# Component Communication through Services

This project helps to understand how two unrelated components communicate using a service.

**steps**

1. Create a userservice class with some user data objects

2. Creat two components user and user-detail

3. At app component provide userService, create userService instance using constructor and append childs user and user-details on the html

`Note: User details is only displayed when click on details button of a user from user component`

4. Inside the user component ts call the service method onShowDetailsClick()

```typescript
showDetails(user: {property: type, .....}) {
    this.userService.onShowDetail(user);
}
```

`Note: user component is already accepting the user object as we done previously do diplay it on the view`

5. At userService create a eventEmitter which will emit the single user detail if the onShowDetail method is called.

```typescript
onShowUserDetail = new EventEmitter<{user onject details}>();

onShowDetail(user: {property: type, ...}) {
    this.onShowUserDetail.emit(user);
}
```

6. Accept this emitted user detail from the user-detail component ts.

```typescript

user!: {name: string, job: string, gender: string, country: string, age: number, avatar: string};

ngOnInit(): void{
    this.userService.onShowDetailsClicked.subscribe((data: {name: string, job: string, gender: string, country: string, age: number, avatar: string}) => {
        this.user = data;
    })
}
```

7. On user detail view display user details only if user != undefined
