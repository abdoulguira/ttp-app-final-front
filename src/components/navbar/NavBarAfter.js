import React from 'react';
import { Link } from "react-router-dom";

export default function NavBarAfter(props) {

    function handleClick(e){
        props.setLoggedIn(false)
        window.location.href = "/"
    }

    return (
        <nav className='navbar'>
            <div>
                <Link className='link-homepage' to="/">MovieWorld App</Link>
                <br></br>
                <h2>Welcome, {props.username}</h2> 
                <button onClick={handleClick}>Log out</button>
            </div>
        </nav>
    );
} 