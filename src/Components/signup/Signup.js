import axios from 'axios';
import React, { useState } from 'react'

const Signup = () => {


    const changeToSignUp = () =>{
        const container = document.getElementById("container");
          container.classList.add("active");
    }
        
    const changeToSignIn = () =>{
        const container = document.getElementById("container");
        container.classList.remove("active");
    }
    
    const [message,setMessage]=useState('');

    const [state,setState]=useState({
        name:'',
        email:'',
        password:''
    })

    const handler = (event) =>{
        const{name,value}=event.target;
        setState({...state,[name]:value})
    }

    const saveData=(event)=>{
        event.preventDefault();
        axios.post("http://localhost:3004/signupdata",state)
        .then((res)=>{
            console.log(res);
            setMessage("Details Received !")
        })
        .then((err)=>{
            console.log(err);
        })
    }



  return (
    <>
    <div className="container" id="container">
    <div className="form-container sign-up">
      <form onSubmit={saveData} method='post'>
        <h1>Create Account</h1>
        <div className="social-icons">
          <a href="/"><i className="fa-brands fa-google-plus-g"></i></a>
          <a href="/"><i className="fa-brands fa-facebook-f"></i></a>
          <a href="/"><i className="fa-brands fa-github"></i></a>
          <a href="/"><i className="fa-brands fa-linkedin-in"></i></a>
        </div>
        <span>or use your email for registeration</span>
        {message?<div className='alert alert-primary'>{message}</div>:''}
        <input type="text" placeholder="Name" name='name' onChange={handler}/>
        <input type="email" placeholder="Email" name='email' onChange={handler}/>
        <input type="password" placeholder="password" name='password' onChange={handler}/>
        <button>Sign Up</button>
      </form>
    </div>
    <div className="form-container sign-in">
      <form>
        <h1>Sign In</h1>
        <div className="social-icons">
          <a href="/"><i className="fa-brands fa-google-plus-g"></i></a>
          <a href="/"><i className="fa-brands fa-facebook-f"></i></a>
          <a href="/"><i className="fa-brands fa-github"></i></a>
          <a href="/"><i className="fa-brands fa-linkedin-in"></i></a>
        </div>
        <span>Enter your Email and Password</span>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="password" />
        <a href="/">Forget Your Password?</a>
        <button>Sign In</button>
      </form>
    </div>
    <div className="toggle-container">
      <div className="toggle">
        <div className="toggle-panel toggle-left">
          <h1>Welcome Back!</h1>
          <p>Enter Your Personal Details to use all of site Features</p>
          <button className="hidden" id="login" onClick={changeToSignIn}>Sign In</button>
        </div>
        <div className="toggle-panel toggle-right">
          <h1>Hello, Friend!</h1>
          <p>
            Register with Your Personal Details to use all of site Features
          </p>
          <button className="hidden" id="register" onClick={changeToSignUp}>Sign Up</button>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default Signup
