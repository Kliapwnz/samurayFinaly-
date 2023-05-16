import React from 'react';
import s from "./Post.module.css";

type PropsType={
    message:string
    likesCounter:number
}

export const Post = (props:PropsType) => {
    return (
        <div className={s.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrLF2dK9mac4u0-IbZBFiFoIyKku6oxrqDNA&usqp=CAU"/>
            {props.message}
            <div>
                <span>Like {props.likesCounter}</span>
            </div>
        </div>
    );
};

