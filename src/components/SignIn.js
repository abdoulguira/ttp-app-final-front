import React, {useState} from "react";

export default function SignIn() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleUserChange = (e) => {
        setUsername(e.target.value);
      }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    return (
        <div>
             <form onSubmit={this.handleSubmit}>   
                    <label className='label'>Enter Username: </label>
                    <input
                        className='input' 
                        id='username' 
                        type='text' 
                        onChange={handleUserChange}
                    />
                    <label className='label'>Email: </label>
                    <input 
                        className='input' 
                        id='email' 
                        type='email' 
                        onChange={handleEmailChange}
                    />
                    <label className='label'>Password: </label>
                    <input 
                        className='input' 
                        id='password' 
                        type='password' 
                        onChange={handlePasswordChange}/>
                    <input type='submit' value='Sign Up'></input>
                </form>
        </div>
    );
}