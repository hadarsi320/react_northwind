import { RegisterOptions } from "react-hook-form";

export class CredentialsModel {
	public email: string;
    public password: string;

    public static EmailValidation: RegisterOptions = {
        required: {value: true, message: "Missing email."},
        minLength: {value: 4, message: "Email is too short."},
        maxLength: {value: 100, message: "Email is too long."},
    }

    public static PasswordValidation: RegisterOptions = {
        required: {value: true, message: "Missing password."},
        minLength: {value: 4, message: "Password is too short."},
        maxLength: {value: 20, message: "Password is too long."},
    }
}
