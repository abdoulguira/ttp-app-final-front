import React, {useState} from "react";

const userAPI = "http://localhost:8001/users/"

export default function LogIn() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    // const [logInSuccess, setLoginSuceess] =  navigate ... 


    function handleUsername(e){
        setUsername(e.target.value)
    }

    function handlePassword(e){
        setPassword(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(username)
        console.log(password)
        fetch(userAPI+username+'/'+password)
            .then(res => {
                if(res.status === 404)
                    console.log("no user found")
                if(res.status === 403)
                    console.log("wrong password")
                if(res.status === 200)
                    console.log("logging successfully")
            })
    }

    return (
        <div className="login-page">
            <h1>Log In Page</h1>
                <div className="form">
                    <label className='label'>Username: </label>
                    <input
                        className='input' 
                        id='username' 
                        type='text' 
                        onChange={handleUsername}
                    /> <br></br>
                    <label className='label'>Password: </label>
                    <input 
                        className='input' 
                        id='password' 
                        type='password' 
                        onChange={handlePassword}
                    /> <br></br>
                    <input type='submit' value='Login' onClick={handleSubmit}></input>
                </div>
        </div>
    );
}