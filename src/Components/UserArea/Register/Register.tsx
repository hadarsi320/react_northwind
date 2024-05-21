import { useForm } from "react-hook-form";
import { UserModel } from "../../../Models/UserModel";
import "./Register.css";
import { userService } from "../../../Services/UserService";
import { notify } from "../../../Utils/notify";
import { useNavigate } from "react-router-dom";

export function Register(): JSX.Element {
    const { register, handleSubmit } = useForm<UserModel>();
    const navigate = useNavigate();

    async function send(user:UserModel) {
        console.log(user);
        
        try {
            await userService.register(user);
            notify.success(`Welcome {user.firstName}`);
            navigate('/home');
        } catch(err: any) {
            console.log(err);
            notify.error(err);
        }
    }

    return (
        <div className="Register">
			<form onSubmit={handleSubmit(send)}>
                <label>First Name:</label>
                <input type='text' {...register("firstName")} />
                
                <label>Last Name:</label>
                <input type='text' {...register("lastName")} />
                
                <label>Email:</label>
                <input type='text' {...register("email")} />
                
                <label>Password:</label>
                <input type='text' {...register("password")} />
                
                <button>Register</button>                
            </form>
        </div>
    );
}
