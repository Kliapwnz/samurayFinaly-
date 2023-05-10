import React from 'react';
import "./Navbar.module.css"

export const Navbar = () => {
    return (
        <div className="nav">
            <div className="item"><a>Profile</a></div>
            <div className="item"><a>Messages</a></div>
            <div className="item"><a>News</a></div>
            <div className="item"><a>Music</a></div>
            <div className="item"><a>Settings</a></div>
        </div>
    );
};

