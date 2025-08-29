export class AuthService {
    loggedIn :boolean = false;

    login() {
        this.loggedIn = true;
    }
    logOut() {
        this.loggedIn = false;
    }
    isAuthenticated() {
        return this.loggedIn;
    }
}