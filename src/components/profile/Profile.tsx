import React from 'react';
import s from "./Profile.module.css"
import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {addPost, ProfilePageType} from "../../redux/state";

type PropsType={
    profilePage:ProfilePageType
    addPost:(PostMessage: string)=>void
}

export const Profile = (props:PropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts} addPost={addPost}/>
        </div>
    );
};

