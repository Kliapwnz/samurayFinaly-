import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {addPost, RootStateType} from "./redux/state"

type PropsType={
    state:RootStateType
    addPost:(PostMessage: string)=>void
}

function App(props:PropsType) {


    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/profile" element={<Profile profilePage={props.state.profilePage} addPost={addPost}/>}/>
                        <Route path="/dialogs/*" element={<Dialogs dialogsPage={props.state.dialogsPage}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
