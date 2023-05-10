import React from 'react';
import s from "./Profile.module.css"
import {MyPosts} from "./myPosts/MyPosts";

export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src="https://static8.depositphotos.com/1021722/859/i/600/depositphotos_8599315-stock-photo-art-business-power.jpg"/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    );
};

