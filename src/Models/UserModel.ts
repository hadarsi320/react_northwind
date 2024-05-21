import { RegisterOptions } from "react-hook-form";
import { CredentialsModel } from "./CredentialsModel";

export class UserModel extends CredentialsModel {
	public id: number;
    public firstName: string;
    public lastName: string;
    public role: string;

    public static FirstNameValidation: RegisterOptions = {
        required: {value: true, message: "Missing first name."},
        minLength: {value: 2, message: "First name is too short."},
        maxLength: {value: 20, message: "First name is too long."},
    }

    public static LastNameValidation: RegisterOptions = {
        required: {value: true, message: "Missing last name."},
        minLength: {value: 2, message: "Last name is too short."},
        maxLength: {value: 20, message: "Last name is too long."},
    }
}
