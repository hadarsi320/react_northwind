import { useForm } from "react-hook-form";
import { UserModel } from "../../../Models/UserModel";
import "./Register.css";
import { userService } from "../../../Services/UserService";
import { notify } from "../../../Utils/notify";
import { useNavigate } from "react-router-dom";

export function Register(): JSX.Element {
    const { register, handleSubmit, formState} = useForm<UserModel>();
    const navigate = useNavigate();

    async function send(user:UserModel) {
        try {
            await userService.register(user);
            notify.success('Welcome ' + user.firstName);
            navigate('/home');
        } catch(err: any) {
            notify.error(err);
        }
    }

    return (
        <div className="Register">
			<form onSubmit={handleSubmit(send)}>
                <label>First Name:</label>
                <input type='text' {...register("firstName", UserModel.FirstNameValidation)} />
                <span className='error'>{formState.errors?.firstName?.message}</span> 
                
                <label>Last Name:</label>
                <input type='text' {...register("lastName", UserModel.LastNameValidation)} />
                <span className='error'>{formState.errors?.lastName?.message}</span> 
                
                <label>Email:</label>
                <input type='text' {...register("email", UserModel.EmailValidation)} />
                <span className='error'>{formState.errors?.email?.message}</span> 
                
                <label>Password:</label>
                <input type='password' {...register("password", UserModel.PasswordValidation)} />
                <span className='error'>{formState.errors?.password?.message}</span> 
                
                <button>Register</button>                
            </form>
        </div>
    );
}
