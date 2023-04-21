import React, { useState } from 'react';
import LoginStyles from '../styles/login.module.css';

export default function LoginForm({ Login, error}) {
    const [details, setDetails] = useState({name:"",email:"",password:""});

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }

  return (
    <form onSubmit={submitHandler}>
        <div className={LoginStyles.formInner}>
            <h2>Login</h2>
            {(error != ""  )? ( <div className={LoginStyles.error}>{error}</div> ) : ""}
            <div className={LoginStyles.formGroup}>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value }) } value={details.name}/>
            </div>
            <div className={LoginStyles.formGroup}>
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value }) } value={details.email} />
            </div>
            <div className={LoginStyles.formGroup}>
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value }) } value={details.password}/>
            </div>

            <input type="submit" value="LOGIN" />
        </div>

    </form>
  );
}