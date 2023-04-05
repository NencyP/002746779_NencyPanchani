import React, { useState } from "react";
import axios from 'axios';
import './login.css';
import {useNavigate} from 'react-router-dom';

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async(event) => {
    event.preventDefault();
    // code for submitting login credentials
    const response = await axios.post('http://localhost:3000/user/login', {
        email: email,
        password: password
      });
  
      console.log(response);
  
      if (response.data === 'Login successful') {
        console.log('Login successful!');
        // add code to redirect to home page or dashboard
        sessionStorage.setItem('email', email);
        navigate("/home");
  
      } else {
        console.log('Invalid credentials');
        alert("Wrong Credentials, Please try Again");
      }
  
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <label className="login-label">
        Email:
        <input className="login-input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label className="login-label">
        Password:
        <input className="login-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button className="login-button" type="submit">Log In</button>
    </form>
  );
}

export default LoginForm;
