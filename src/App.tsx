import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";


function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <Routes>
            <div className="app-wrapper-content">
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/dialogs" element={<Dialogs/>}/>
            </div>
            </Routes>
            {/*<Profile/>*/}
        </div>
    );
}

export default App;
