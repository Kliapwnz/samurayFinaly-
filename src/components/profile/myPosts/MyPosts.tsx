import React from 'react';
import s from "./MyPosts.module.css";
import {Post} from "./post/Post";

export const MyPosts = () => {
    let postData = [
        {id: 1, message: "Hello! This is my first post", likesCounter: 6},
        {id: 2, message: "How are you, guys?", likesCounter: 12},
        {id: 3, message: "I try to learn js!", likesCounter: 88},
    ]

    let postElements = postData.map(el => {
            return (
                <Post message={el.message} likesCounter={el.likesCounter}/>
            )
        }
    )
    return (
        <div className={s.postsBlock}>
            my posts
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );
};

