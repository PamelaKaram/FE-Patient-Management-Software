import { useForm } from "react-hook-form";

export default function LoginForm() {
    const form = useForm();
    const { register } = form
    // const { name, ref, onChange, onBlur } = register("username")
    return (
        <div>
            <form>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    {...register("username")}
                />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    {...register("email")} />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    {...register("password")} />

                <button type="submit">Login</button>

            </form>
        </div>

    )


}

