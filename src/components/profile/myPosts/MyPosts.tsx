import React from 'react';
import s from "./MyPosts.module.css";
import {Post} from "./post/Post";

export const MyPosts = () => {
    return (
        <div>
            my posts
            <div>
                <textarea></textarea>
                <button>Add Post</button>
            </div>
            <div className={s.posts}>
                <Post message="Hello! This is my first post"/>
                <Post message="How are you, guys?"/>
                <Post message="I try to learn js!"/>
            </div>
        </div>
    );
};

