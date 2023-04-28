import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import LoginStyles from "@/styles/login.module.css";
import { signIn, useSession } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const ForgotPassword = () => {
  const form = useForm();
  const router = useRouter();
  const [resetPasswordError, setResetPasswordError] = useState();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;
  const session = useSession();

  const onSubmit = async (data) => {
    try {
      // Call your API to reset the password here
      // ...
      
      // Once the password is reset, redirect the user to the login page
      router.push("/login");
    } catch (err) {
      console.log(err);
      setResetPasswordError("Failed to reset password");
    }
  };

  return (
    <div className={LoginStyles.formContainer}>
      <div className={LoginStyles.form}>
        <h2 className={LoginStyles.title}>Reset Password</h2>
        {resetPasswordError && <p className={LoginStyles.error}>{resetPasswordError}</p>}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={LoginStyles.formControl}>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && <p className={LoginStyles.error}>Please enter a valid email address</p>}
          </div>
          <button className={LoginStyles.customButton} type="submit">
            Reset Password
          </button>
        </form>
        <Link href="/login" className={LoginStyles.forgotPassword}>
          Back to Login
        </Link>
        <DevTool control={control} />
      </div>
    </div>
  );
};

export default ForgotPassword;