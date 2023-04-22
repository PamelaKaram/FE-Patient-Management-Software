import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import useAxiosAuth from "../../lib/hooks/useAxiosAuth";
import LoginStyles from "@/styles/login.module.css";
import Image from "next/image";
import SideImage from '../Icons/registrationFormIcon.svg';

export default function LoginForm() {
    const defaultValues = {
        username: "Username",
        email: "Email",
        password: "Password"
    };

    const form = useForm({ defaultValues });
    const { register, control, handleSubmit, formState } = form;
    const { errors } = formState;

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className={LoginStyles.formContainer}>
        <div className={LoginStyles.form}>
            <h2 className={LoginStyles.title} >Login</h2>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>

                <div className={LoginStyles.formControl}>
                    <input
                        type={LoginStyles.text}
                        id="username"
                        {...register("username", {
                            required: {
                                value: true,
                                message: "Username is required",
                            },
                        })}
                        className={LoginStyles.input}
                        onFocus={(e) => e.target.value = ''}
                        defaultValue={defaultValues.username}
                    />
                </div>
                <p className={LoginStyles.error}>{errors.username?.message}</p>

                <div className={LoginStyles.formControl}>
                    <input
                        type={LoginStyles.email}
                        id="email"
                        {...register("email", {
                            pattern: {
                                value: /^[A-Z0-9.!#&'*/=?_%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address",
                            },
                        })}
                        className={LoginStyles.input}
                        onFocus={(e) => e.target.value = ''}
                        defaultValue={defaultValues.email}
                    />
                </div>
                <p className={LoginStyles.error}>{errors.email?.message}</p>

                <div className={LoginStyles.formControl}>
                    <input
                        type={LoginStyles.text}
                        id="password"
                        {...register("password", {
                            required: {
                                value: true,
                                message: "Password is required",
                            },
                            minLength: {
                                value: 8,
                                message: "Password must be at least 8 characters",
                            },
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                                message:
                                    "Password must contain 1 upper and 1 lowercase letter and 1 number",
                            },
                        })}
                        className={LoginStyles.input}
                        onFocus={(e) => e.target.value = ''}
                        defaultValue={defaultValues.password}
                    />

                </div>
                <p className={LoginStyles.error}>{errors.password?.message}</p>
                <button className={LoginStyles.customButton} type="submit">Login</button>
            </form>
            <DevTool control={control} />
        </div>
        <div className={LoginStyles.image}>
        <Image
          src={SideImage.src}
          alt="Phone"
          width={0}
          height={0}
          className={LoginStyles.imageClass} />
      </div>
    </div>
    );
}
