import React, { useState } from "react";
import "./Auth.css";

function Register(){
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        console.log('Username:',username, 'Email:',email, 'Password:',password);
    }
    return(
        <div className="authContainer">
            <h2>Register Page</h2>
            <form onSubmit={handleRegister}>
                <div className="formGroup">
                    <label>UserName</label>
                    <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} required></input>
                </div>
                <div className="formGroup">
                    <label>Email</label>
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required></input>
                </div>
                <div className="formGroup">
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required></input>
                </div>
                <button className="Auth" type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register