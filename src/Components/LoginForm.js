import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import useAxiosAuth from "../../lib/hooks/useAxiosAuth";
import LoginStyles from "@/styles/login.module.css";
import Image from "next/image";
import SideImage from "../Icons/registrationFormIcon.svg";
import { signIn, useSession } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/router";

export default function LoginForm() {
  const form = useForm();
  const router = useRouter();
  const [signInError, setSignInError] = useState();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;
  const session = useSession();
  console.log(session);

  const onSubmit = async (data) => {
    try {
      const signin = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: "",
      });
      if (signin.error) setSignInError(signin.error);
      else {
        const role = session.data.user.role;
        if (role === "doctor") router.push("/doctor");
        else if (role === "patient") router.push("/patient");
        else if (role === "pharmacy") router.push("/pharmacy");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={LoginStyles.formContainer}>
      <div className={LoginStyles.form}>
        <h2 className={LoginStyles.title}>Login</h2>
        {signInError && <p className={LoginStyles.error}>{signInError}</p>}
        <form onSubmit={handleSubmit(onSubmit)}>
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
            />
          </div>
          <p className={LoginStyles.error}>{errors.email?.message}</p>

          <div className={LoginStyles.formControl}>
            <input
              type="password"
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
            />
          </div>
          <p className={LoginStyles.error}>{errors.password?.message}</p>
          <button className={LoginStyles.customButton} type="submit">
            Login
          </button>
        </form>
        <DevTool control={control} />
      </div>
      <div className={LoginStyles.image}>
        <Image
          src={SideImage.src}
          alt="Phone"
          width={0}
          height={0}
          className={LoginStyles.imageClass}
        />
      </div>
    </div>
  );
}
