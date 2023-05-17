import React from 'react';
import s from "./ProfileInfo.module.css"

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://static8.depositphotos.com/1021722/859/i/600/depositphotos_8599315-stock-photo-art-business-power.jpg"/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
};

