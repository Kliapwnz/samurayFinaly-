import React from 'react';
import s from "./MyPosts.module.css";

export const MyPosts = () => {
    return (
        <div>
            my posts
            <div>
                <textarea></textarea>
                <button>Add Post</button>
            </div>
            <div className={s.posts}>
                <div className={s.item}>Post1</div>
                <div className={s.item}>Post2</div>
                <div className={s.item}>Post3</div>
            </div>
        </div>
    );
};

