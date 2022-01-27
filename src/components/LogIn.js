import React, {useState} from "react";
import { Navigate, useParams } from "react-router-dom"

const userAPI = "https://ttp-app-final-back.herokuapp.com/users/"

export default function LogIn() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [logInSuccess, setLoginSuceess] =  useState(false)


    function handleUsername(e){
        setUsername(e.target.value)
    }

    function handlePassword(e){
        setPassword(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        if(username == ""){
            alert("enter username")
            return
        }
        else if(username == ""){
            alert("enter password")
            return 
        }
        console.log(password)
        fetch(userAPI+username+'/'+password)
            .then(res => {
                if(res.status === 404)
                    alert("no user found")
                if(res.status === 403)
                    alert("Wrong Password")
                if(res.status === 200 && res.body["name"] == "SequelizeConnectionRefusedError"){
                    alert("Not able to connect to database")
                }
                if(res.status === 200 && res.body["name"] == null){
                    console.log("logging successfully")
                    setLoginSuceess(true)

                }
            })
    }
    
    if (logInSuccess) {
        return (<Navigate replace to={`/usr/${username}/${true}`} state={username}/>)
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