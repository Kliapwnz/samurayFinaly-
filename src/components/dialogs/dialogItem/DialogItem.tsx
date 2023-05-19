import React from 'react';
import {NavLink} from "react-router-dom";
import s from "../Dialogs.module.css";

type DialogsPropsType = {
    name: string
    id: number
}

export const DialogItem = (props:DialogsPropsType) => {
    return (
        <div>
            <div><NavLink to={"/dialogs/" + props.id} className={s.dialogItems + " " + s.active}>{props.name}</NavLink>
            </div>
        </div>
    );
};

