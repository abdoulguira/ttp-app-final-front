import React from 'react';
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav className='navbar'>
            <h1>MovieWorld App</h1>
            <div>
                <Link className='link' to="/login">LOG IN</Link>
                <Link className='link' to="/signup">SIGN UP</Link>
            </div>
        </nav>
    );
} 