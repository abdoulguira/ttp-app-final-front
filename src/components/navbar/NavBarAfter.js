import React from 'react';
import { Link } from "react-router-dom";

export default function NavBarAfter() {
    return (
        <nav className='navbar'>
            <div>
                <Link className='link-homepage' to="/">MovieWorld App</Link>
                <br></br>
            </div>
        </nav>
    );
} 