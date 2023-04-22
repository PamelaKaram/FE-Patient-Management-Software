import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import useAxiosAuth from "../../lib/hooks/useAxiosAuth";

export default function LoginForm() {
    const form = useForm();
    const { register, control, handleSubmit } = form

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    {...register("username",
                        {
                            required: {
                                value: true,
                                message: 'Username is required'
                            }
                        })}
                />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    {...register("email", {
                        pattern: {
                            value: /^[A-Z0-9.!#&'*/=?_%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address'
                        },
                    })}
                />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    {...register("password",
                        {
                            required: {
                                value: true,
                                message: 'Password is required'
                            },
                            minLength: {
                                value: 8,
                                message: 'Password must be at least 8 characters'
                            },

                            valid: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                                message: 'Password must contain 1 upper and 1 lowercasse letter and 1 number'

                            }
//the valid functon is not working. I am not sure why. I am trying to make sure the password has at least 1 uppercase letter, 1 lowercase letter and 1 number.


                        })} />

                <button type="submit">Login</button>

            </form>
            <DevTool control={control} />
        </div>

    )


}

