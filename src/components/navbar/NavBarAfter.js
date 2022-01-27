import React from 'react';
import { Link } from "react-router-dom";

export default function NavBarAfter() {
    return (
        <nav className='navbar'>
            <div>
                <Link className='link-homepage' to="/">MovieWorld App</Link>
                <br></br>
                <h2>Welcome, user!</h2> 
                {/* user needs to be replaced with username that logs in*/}
            </div>
        </nav>
    );
} 