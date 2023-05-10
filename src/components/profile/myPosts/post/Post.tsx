import React from 'react';
import s from "./Post.module.css";

export const Post = () => {
    return (
        <div className={s.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrLF2dK9mac4u0-IbZBFiFoIyKku6oxrqDNA&usqp=CAU"/>
            Post1
            <div>
                <span>Like</span>
            </div>
        </div>
    );
};

