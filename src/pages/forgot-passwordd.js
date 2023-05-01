import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import useAxiosAuth from "../../lib/hooks/useAxiosAuth";
import LoginStyles from "@/styles/login.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "../../lib/axios";

const ForgotPasswordd = () => {
  const form = useForm();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;
  const router = useRouter();
  const {email} = router.query;

  const onSubmit = async (data) => {

    if (number === '' || !/^\d{6}$/.test(number)) {
      alert('Please enter a valid 6-digit number.');
      return;
    }

    try{
      const res = await axios.post("http://localhost:8080/api/v1/auth/forgotPassword",
      {
        email:email,
        code: code,
        password:password,
        confirmPassword:confirmPassword,
      }
    );
    router.push("/login");
    }catch(err){
      console.log(err);
      setResetPasswordError("Failed to reset password");
    }
    
  };

  return (
    <div className={LoginStyles.formContainer}>
      <div className={LoginStyles.form}>
        <h2 className={LoginStyles.title}>Forgot Password</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={LoginStyles.formControl}>
            <input
              type="text"
              id="verificationCode"
              {...register("verificationCode", {
                required: {
                  value: true,
                  message: "Verification code is required",
                },
              })}
              placeholder="Verification Code"
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
              })}
              className={LoginStyles.input}
              placeholder="Password"
            />
          </div>
          <p className={LoginStyles.error}>{errors.password?.message}</p>
          <div className={LoginStyles.formControl}>
            <input
              type="password"
              id="newPassword"
              {...register("newPassword", {
                required: {
                  value: true,
                  message: "New password is required",
                },
                minLength: {
                  value: 8,
                  message: "New password must be at least 8 characters",
                },
              })}
              className={LoginStyles.input}
              placeholder="New Password"
            />
          </div>
          <p className={LoginStyles.error}>{errors.newPassword?.message}</p>
          <button className={LoginStyles.customButton} type="submit">
            Submit
          </button>
        </form>
        <Link href="/login" className={LoginStyles.loginLink}>
          Back to Login
        </Link>
        <DevTool control={control} />
      </div>
    </div>
  );
};

export default ForgotPasswordd;