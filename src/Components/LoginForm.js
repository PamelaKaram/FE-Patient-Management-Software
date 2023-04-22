import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import useAxiosAuth from "../../lib/hooks/useAxiosAuth";
import LoginStyles from "@/styles/login.module.css";
export default function LoginForm() {
    const form = useForm();
    const { register, control, handleSubmit, formState } = form
    const { errors } = formState

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div>
            <h1>Login</h1>

            <form onSubmit={handleSubmit(onSubmit)} noValidate>
               
                    <label htmlFor="username">Username</label>
                    <div className={LoginStyles.formControl}>
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
                </div>
                <p className={LoginStyles.error}>{errors.username?.message}</p>
                <label htmlFor="email">Email</label>
                <div className={LoginStyles.formControl}>
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
                </div>
                <p className={LoginStyles.error}>{errors.email?.message}</p>
               
                    <label htmlFor="password">Password</label>
                    <div className={LoginStyles.formControl}>
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
                </div>
                <p className={LoginStyles.error}>{errors.password?.message}</p>
                <button type="submit">Login</button>

            </form>
            <DevTool control={control} />
        </div>

    )


}

