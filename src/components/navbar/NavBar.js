import React from 'react';
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav className='navbar'>
            <h1>MovieWorld App</h1>
            <div>
                <Link className='link' to="/Login">LOG IN</Link>
                <Link className='link' to="/SignUp">SIGN UP</Link>
            </div>
        </nav>
    );
} 