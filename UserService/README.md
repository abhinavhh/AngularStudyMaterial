# Dependency Injection - input read and value dislay Update

This project helps to understand the dependency injection for inout read and dynamically updating the values.

**Steps**

1. Create a service folder and a file inside it which is used as a service class
2. Inside this class file create the export class with a object list containing users name and status.
3. Create a addUser component inside the app folder and create a input field, select field with options active or inactive and a button in the html file.
4.Inside the typescript file create username and status properties to assign the user given values from the DOM using ngModel.
5.send this values to the service function when button is clicked.

**Example Codes**

### html AppComponent

username: string = ''
status: string = ''

onClick() {
this.userService.addUser(this.username, this.status);
}

`Note: Remember we need to create the instance of the service using constructor and providers`

### service Class

```typescript
export class UserService() {
users = [{ list of users with name and status values }];

    addUser({name: string, status: string}) {
        this.users.push({name: name, status: status});
    }

}
```

`Note: This users object array is already accessed to the app component to display the username and their status`

### app component

users: {name: string, status: string}[] = [];

ngOnInit() {
this.users = this.userService.users;
}

`Note: Make sure you have used providers only at app module or app component, if you use same provider at each component then it will be overrided`


# Communication between services

We need to log a message when a new user is added into the list. But we need to implement it through another service. When a user is added using the userService we need to display a message using loggerService.

1. Create a new service in the same service folder. 
2. Create a logmessage method inside it to display some message
3. To connect the logService with the userService first create a constructor at the userService. Create a logger instance within this constructor.

**We can't use @Component decorator to specify metadata for a service Class instead we use a special decorator "@Injectable()"**

`@Injectable() -> something can be injected in this service`

```typescript
@Injectable()
export class UserService{
    constructor(private logger: LoggerService) { }
}
```

4. Create a loggerService instance at the appComponent Constructor where we created userService instance. Also provide that in providers.

`Note: We can also provide this loggerService from app module`



`Service injection completed`
