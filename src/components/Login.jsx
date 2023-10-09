import React, { useState,useEffect,useContext} from 'react'
import bg from '../assets/login-bg.png'
import logo from '../assets/login-logo.svg'
import mail from '../assets/mail.svg'
import pwd from '../assets/pswd.svg'
import './Login.css'
import { useNavigate } from "react-router-dom";
import app from "../firebase"
import { auth } from "../firebase";
import {  signInWithEmailAndPassword } from 'firebase/auth';
import { GlobalContext } from '../context/GlobalState'


function Login() {
           const {isLoggedIn,LoggedIn}=useContext(GlobalContext);
           const{email,Email}=useState(GlobalContext)
        const[emailID,setEmailID]=useState("");
        const[password,setPassword]=useState("");
         const navigate =useNavigate();

       const toDashboard = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, emailID, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/leftNav")
            LoggedIn(true,email);
            Email(emailID)
            alert("welcome" + " " + email);
            console.log(isLoggedIn);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorCode, errorMessage)
        });
              
       }

   
      
  return (
    <div className="login" style={{backgroundImage : `url(${bg})`}}>
          <div className="logo d-flex justify-content-start">
               <img src={logo} alt="" />
          </div>

          <div className="row main-content text-white align-items-center justify-content-center">
            <div className="col-md-6 justify-content-start ">
                <div className="login-left">
                <h2>Any color. Anywhere. Every time.</h2>
                 <p>Our tinting solutions enable the paint industry to live up to consumer 
expectations. Expect quality without compromise.</p>
                </div>
            </div>
            <div className="col-md-4 login-form ">
                <div className="login-heading">
                    <h3>Sign In</h3>
                    <p>Welcome to Gmmco CAT</p>
                </div>
                <form >
  <div className="form-group">
    <label >Email address:</label>
         <div className="input-group">                 
             <img src={mail} alt="" />
                <input type="text" className="form-control myInput" placeholder="Username" required="required"
                onChange={(e) =>(setEmailID(e.target.value))}/>
         </div>
     
  </div>
  <div className="form-group">
    <label >Password:</label>
    <div className="input-group">
        <span> <img src={pwd} alt="" /></span>
    <input type="password" className="form-control myInput" placeholder="Enter password" id="pwd"  onChange={(e) =>setPassword(e.target.value)}/>
    </div>
  </div>
  <div className="form-group form-check ">
    <label className="form-check-label  d-flex justify-content-between">
      <div>
      <input className="form-check-input" type="checkbox" />Remember me  
      </div>
      <span>Forget Password?</span>
    </label>
  </div>
    
  <button type="submit" className="btn btn-primary" onClick={toDashboard}>Login</button>
</form>
            </div>

        </div>
    </div>
  )
}

export default Login