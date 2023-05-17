import React from 'react';
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem id={1} name="Evgeniy"/>
                <DialogItem id={2} name="Anastasiya"/>
                <DialogItem id={3} name="Yuri"/>
                <DialogItem id={4} name="Elena"/>
                <DialogItem id={5} name="Kristina"/>
                <DialogItem id={6} name="Kevin"/>
            </div>
            <div className={s.messages}>
                <Message message="Hi!"/>
                <Message message="Do you play football?"/>
                <Message message="How long?"/>
            </div>
        </div>
    );
};

