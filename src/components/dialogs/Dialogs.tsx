import React from 'react';import s from "./Dialogs.module.css";import {NavLink} from "react-router-dom";type MessagePropsType = {    message: string}type DialogsPropsType = {    name: string    id: number}const Message = (props: MessagePropsType) => {    return (        <div className={s.messages}>            <div className={s.message}>{props.message}</div>        </div>    );};const DialogItem = (props: DialogsPropsType) => {    return (        <div>            <div><NavLink to={"/dialogs/" + props.id} className={s.dialogItems + " " + s.active}>{props.name}</NavLink>            </div>        </div>    );};export const Dialogs = () => {    let dialogsData = [        {id: 1, name: "Evgeniy"},        {id: 2, name: "Anastasiya"},        {id: 3, name: "Yuri"},        {id: 4, name: "Elena"},        {id: 5, name: "Kristina"},        {id: 6, name: "Kevin"},    ]    let messagesData = [        {id: 1, message: "Hi!"},        {id: 2, message: "Do you play football?"},        {id: 3, message: "How long?"},    ]    return (        <div className={s.dialogs}>            <div className={s.dialogItems}>                {dialogsData.map(el => {                    return (<DialogItem name={el.name} id={el.id}/>)                })}                {/*<DialogItem id={1} name="Evgeniy"/>*/}                {/*<DialogItem id={2} name="Anastasiya"/>*/}                {/*<DialogItem id={3} name="Yuri"/>*/}                {/*<DialogItem id={4} name="Elena"/>*/}                {/*<DialogItem id={5} name="Kristina"/>*/}                {/*<DialogItem id={6} name="Kevin"/>*/}            </div>            <div className={s.messages}>                {/*<Message message="Hi!"/>*/}                {/*<Message message="Do you play football?"/>*/}                {/*<Message message="How long?"/>*/}            </div>        </div>    );};