import React, {useState} from "react";

export default function LogIn() {

    return (
        <div className="login-page">
            <h1>Log In Page</h1>
                <div className="form">
                    <label className='label'>Username: </label>
                    <input
                        className='input' 
                        id='username' 
                        type='text' 
                    /> <br></br>
                    <label className='label'>Password: </label>
                    <input 
                        className='input' 
                        id='password' 
                        type='password' 
                    /> <br></br>
                    <input type='submit' value='Login'></input>
                </div>
        </div>
    );
}