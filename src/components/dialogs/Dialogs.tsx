import React from 'react';
import s from "./Dialogs.module.css";

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={s.dialog + " " + s.active}>Evgeniy</div>
                <div className={s.dialog}>Anastasiya</div>
                <div className={s.dialog}>Yuri</div>
                <div className={s.dialog}>Elena</div>
                <div className={s.dialog}>Kristina</div>
                <div className={s.dialog}>Kevin</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Do you play football?</div>
                <div className={s.message}>How long?</div>
            </div>
        </div>
    );
};

