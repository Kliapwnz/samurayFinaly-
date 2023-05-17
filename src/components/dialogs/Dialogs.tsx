import React from 'react';
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div><NavLink to="/1" className={s.dialog + " " + s.active}>Evgeniy</NavLink></div>
                <div><NavLink to="/2" className={s.dialog}>Anastasiya</NavLink></div>
                <div><NavLink to="/3" className={s.dialog}>Yuri</NavLink></div>
                <div><NavLink to="/4" className={s.dialog}>Elena</NavLink></div>
                <div><NavLink to="/5" className={s.dialog}>Kristina</NavLink></div>
                <div><NavLink to="/6" className={s.dialog}>Kevin</NavLink></div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Do you play football?</div>
                <div className={s.message}>How long?</div>
            </div>
        </div>
    );
};

