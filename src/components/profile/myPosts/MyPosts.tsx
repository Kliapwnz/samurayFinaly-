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
                <Post message="Hello! This is my first post" likesCounter={6}/>
                <Post message="How are you, guys?" likesCounter={12}/>
                <Post message="I try to learn js!" likesCounter={88}/>
            </div>
        </div>
    );
};

