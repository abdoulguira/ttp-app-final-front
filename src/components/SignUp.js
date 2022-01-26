import React, {useState} from "react";

export default function SignUp() {

    return (
        <div className="login-page">
            <h1>Sign Up Page</h1>
                    <label className='label'>Enter Username: </label>
                    <input
                        className='input' 
                        id='username' 
                        type='text' 
                    /> <br></br>
                    <label className='label'>Email: </label>
                    <input 
                        className='input' 
                        id='email' 
                        type='email' 

                    /> <br></br>
                    <label className='label'>Password: </label>
                    <input 
                        className='input' 
                        id='password' 
                        type='password' 
                    /> <br></br>
                    <input type='submit' value='Sign Up'></input>
        </div>
    );
}