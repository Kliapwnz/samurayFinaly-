import React from 'react';
import s from "./Dialogs.module.css";

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={s.item}>Evgeniy</div>
                <div className={s.item}>Anastasiya</div>
                <div className={s.item}>Yuri</div>
                <div className={s.item}>Elena</div>
                <div className={s.item}>Kristina</div>
                <div className={s.item}>Kevin</div>
            </div>
        </div>
    );
};

