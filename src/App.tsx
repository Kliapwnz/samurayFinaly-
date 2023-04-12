import React from 'react';
import './App.css';


function App() {
    return (
        <div className="app-wrapper">
            <header className="header">
                <img src="https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg?w=2000"/>
            </header>
            <nav className="nav">
                <div><a>Profile</a></div>
                <div><a>Messages</a></div>
                <div><a>News</a></div>
                <div><a>Music</a></div>
                <div><a>Settings</a></div>
            </nav>
            <div className="content">
                <div>
                    <img
                        src="https://static8.depositphotos.com/1021722/859/i/600/depositphotos_8599315-stock-photo-art-business-power.jpg"/>
                </div>
                <div>
                    ava + description
                </div>
                <div>
                    my posts
                    <div>
                        New Post
                    </div>
                    <div>
                        <div>Post1</div>
                        <div>Post2</div>
                        <div>Post3</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
