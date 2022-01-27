import React, {useState} from "react";

const newUserAPI = "http://localhost:8001/users/"
export default function SignUp() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [gender, setGender] = useState("M")

    function handleUsername(e){
        setUsername(e.target.value)
    }

    function handleEmail(e){
        setEmail(e.target.value)
    }

    function handlePassword(e){
        setPassword(e.target.value)
    }
    
    function handleGender(e){
        setGender(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        if (username.length < 5){
            alert("username need to be at least 5 characters")
        }
        if (password.length < 8){
            alert("password need to be at least 8 characters")
        }
        fetch(newUserAPI, {
            method: "POST",
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "username": username,
                "user_password": password,
                "email": email,
                "gender": gender
            })
        })
        .then( res =>{
            if(res.status === 400){
                alert('something went wrong, please try again')
            }
            else{
                console.log("created user successfully")
                // lead to main page
            }
        } 
        )
    }

    return (
        <div className="login-page">
            <h1>Sign Up Page</h1>
                <div className="form">
                    <label className='label'>Enter Username: </label>
                    <input
                        className='input' 
                        id='username' 
                        type='text' 
                        onChange={handleUsername}
                    /> <br></br>
                    <label className='label'>Email: </label>
                    <input 
                        className='input' 
                        id='email' 
                        type='email' 
                        onChange={handleEmail}

                    /> <br></br>
                    <label className='label'>Password: </label>
                    <input 
                        className='input' 
                        id='password' 
                        type='password' 
                        onChange={handlePassword}
                    /> <br></br>

                    <select name="gender" id="gender" onChange={handleGender}>
                    <option value="M">Male</option>
                    <option value="F">Female</option>
    </select>
                    <input type='submit' value='Sign Up' onClick={handleSubmit}></input>
                </div>
        </div>
    );
}