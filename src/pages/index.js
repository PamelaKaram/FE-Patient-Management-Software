import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Sidebar from '../Components/Sidenav1';
// import AppointmentsList from '../Components/AppointmentList';
import LoginForm from '../Components/LoginForm';
import React, { useState } from 'react';

export default function Home() {
  const adminUser={
    email:"admin@admin.com",
    password:"admin123"

  }
  const [user,setUser]=useState({name:"",email:""});
  const [error,setError]=useState("");
  
  const Login=details=>{
    console.log(details);
    if(details.email==adminUser.email && details.password==adminUser.password){
      console.log("Logged in");
      setUser({
        name:details.name,
        email:details.email
      });
    }else{
      console.log("Details do not match!");
      setError("Details do not match!");
    }
  }

    const Logout = () =>{ 
      console.log("Logout");
       setUser({name:"",email:""});
    }
  
    function validateUsername(username) {
      if (username.length < 4 || username.length > 20) {
        return false;
      }
      return true;
    }

    function validatePassword(password) {
      var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
      return re.test(password);
    }

    


  return ( 
    
    
     <div className="App"> 
      {(user.email!="" ) ? (
        <div className="welcome">
          <h2>Welcome, <span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
        
      ): ( 
      <LoginForm Login={Login} error={error} />
      )}  
      
     

     {/* <main className="test">
        <Sidebar/>
      </main> */}
    </div>
  )
}


