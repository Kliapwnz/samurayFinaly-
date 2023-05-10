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
                <div className={s.item}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrLF2dK9mac4u0-IbZBFiFoIyKku6oxrqDNA&usqp=CAU"/>
                    Post1
                </div>
                <div className={s.item}>Post2</div>
                <div className={s.item}>Post3</div>
            </div>
        </div>
    );
};

