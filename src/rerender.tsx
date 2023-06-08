import {addPost, RootStateType} from "./redux/state";
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";

export const rerenderTree = (state: RootStateType) => {
    const root = ReactDOM.createRoot(
        document.getElementById('root') as HTMLElement
    );
    root.render(
        <React.StrictMode>
            <App state={state} addPost={addPost}/>
        </React.StrictMode>
    );

}