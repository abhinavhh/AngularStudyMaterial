export class LoggerService {
    LogMessage(name: string, status: string) {
        alert(`new user with username ${name} and is ${status}`);
    }
}