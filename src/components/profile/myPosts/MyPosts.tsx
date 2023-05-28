import React from 'react';
import s from "./MyPosts.module.css";
import {Post} from "./post/Post";
import {PostType, state} from "../../../redux/state";

type PropsType={
    posts:PostType[]
}

export const MyPosts = (props:PropsType) => {

    let postElements = props.posts.map(el => {
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

