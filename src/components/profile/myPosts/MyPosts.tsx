import React from 'react';
import s from "./MyPosts.module.css";
import {Post} from "./post/Post";
import {PostType, state} from "../../../redux/state";

type PropsType = {
    posts: PostType[]
    addPost: (PostMessage: string) => void
}

export const MyPosts = (props: PropsType) => {

    let postElements = props.posts.map(el => {
            return (
                <Post message={el.message} likesCounter={el.likesCounter}/>
            )
        }
    )
    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        if (newPostElement.current){
            props.addPost(newPostElement.current.value)
        }
    }


    return (
        <div className={s.postsBlock}>
            my posts
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );
};

