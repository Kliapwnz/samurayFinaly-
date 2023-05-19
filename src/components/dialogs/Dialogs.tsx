import React from 'react';import s from "./Dialogs.module.css";import {DialogItem} from "./dialogItem/DialogItem";import {Message} from "./message/Message";export const Dialogs = () => {    let dialogsData = [        {id: 1, name: "Evgeniy"},        {id: 2, name: "Anastasiya"},        {id: 3, name: "Yuri"},        {id: 4, name: "Elena"},        {id: 5, name: "Kristina"},        {id: 6, name: "Kevin"},    ]    let messagesData = [        {id: 1, message: "Hi!"},        {id: 2, message: "Do you play football?"},        {id: 3, message: "How long?"},    ]    let dialogElements = dialogsData.map(el => {        return (<DialogItem name={el.name} id={el.id}/>)    })    let messagesElements = messagesData.map(el => {        return (            <Message message={el.message}/>        )    })    return (        <div className={s.dialogs}>            <div className={s.dialogItems}>                {dialogElements}            </div>            <div className={s.messages}>                {messagesElements}            </div>        </div>    );};