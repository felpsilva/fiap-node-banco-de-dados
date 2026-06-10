export class InvalidCredentialsError extends Error {
    constructor() {
        super("User name or password is incorrect")
    }
}