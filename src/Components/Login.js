import React, { useState } from "react";
import "./Auth.css";

function Login(){
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Email:',email, 'Password:',password);
    }

    return (
        <div className="authContainer">
            <h2>Login Page</h2>
            <form onSubmit={handleLogin}>
            <div className="formGroup">
                    <label>Email</label>
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required></input>
                </div>
                <div className="formGroup">
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required></input>
                </div>
                <button className="Auth" type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login