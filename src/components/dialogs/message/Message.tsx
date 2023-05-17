import React from 'react';
import s from "./Message.module.css";

type PropsType={
    message:string
}

export const Message = (props:PropsType) => {
    return (
        <div className={s.messages}>
            <div className={s.message}>{props.message}</div>
        </div>
    );
};

