# Services

services helps in providing single service for multiple components so that we dont need to create it in each component

**_Creating Service_**

1. Create a service folder inside app folder`
2. Create the component we need`
3. Create a class file inside the service folder eg: enroll.service.ts`
4. Inside this file we will create and export a class eg: export class EntrollService{} - `you can now create properties inside this class which can be accessed from other components, also you can accept arguments`

export class EnrollService(param: type) {}

**_Accessing Service_**

1. Inside your component, create a const variable`
2. Assign the instance of the service class into this variable Eg: const enrollService = new EnrollService()`
3. call the properties of this service Eg: enrollService.onEnrollClicked(params)`

# Dependency Injection in services

Dependency injection is a technique in which a class receives its dependencies from external sources rather than creating then itself.

`This means we can remove the creation of service instance from our component.`

**_Dependency Injection_**

1. Create a constructor with params of the type EnrollService `(This way instance is created)`
2. We need to specify the angular for creating instance it cant create itself so we use providers in @Component `
3. providers: [EnrollService] - `This way constructor param receives the instance and everthing work as previous (please access the instances using this.)`

**Note: If we use the provider on the app component then we dont need to create it on all other components -- This is called hierarchical Dependency Injection**

**Note: If we use the provider on the app module then that instance will be available on all other components.**
