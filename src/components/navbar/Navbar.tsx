import React from 'react';
import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";


export const Navbar = () => {
    return (
        <div className={s.nav}>
            <div className={s.item}><NavLink to="/profile"
                                             className={navData => navData.isActive ? s.active : s.item}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}><NavLink to="/dialogs"
                                                              className={navData => navData.isActive ? s.active : s.item}>Messages</NavLink>
            </div>
            <div className={s.item}><NavLink to="News"
                                             className={navData => navData.isActive ? s.active : s.item}>News</NavLink>
            </div>
            <div className={s.item}><NavLink to="Music"
                                             className={navData => navData.isActive ? s.active : s.item}>Music</NavLink>
            </div>
            <div className={s.item}><NavLink to="Settings"
                                             className={navData => navData.isActive ? s.active : s.item}>Settings</NavLink>
            </div>
        </div>
    );
};

