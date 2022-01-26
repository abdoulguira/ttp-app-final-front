import React from 'react';
import { Link } from "react-router-dom";

export default function NavBarBefore() {
    return (
        <nav className='navbar'>
            <div>
                <Link className='link-homepage' to="/">MovieWorld App</Link>
                <br></br>
                <Link className='link' to="/login">LOG IN</Link>
                <Link className='link' to="/signup">SIGN UP</Link>
            </div>
        </nav>
    );
} 