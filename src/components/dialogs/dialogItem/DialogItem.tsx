import React from 'react';
import {NavLink} from "react-router-dom";
import s from "./DialogItem.module.css";

type PropsType = {
    name: string
    id: number
}

export const DialogItem = (props: PropsType) => {
    return (
        <div>
            <div><NavLink to={"/dialogs/" + props.id} className={s.dialog + " " + s.active}>{props.name}</NavLink></div>
        </div>
    );
};

