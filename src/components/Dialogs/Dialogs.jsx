import s from './Dialogs.module.css';
import React from "react";
import { NavLink } from 'react-router-dom';


const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>
}

export const Dialogs = (props) => {
    let dialogs = [
        { id: 1, name: 'Roronoa Zoro' },
        { id: 2, name: 'Nami' },
        { id: 3, name: 'Usopp' },
        { id: 4, name: 'Vinsmoke Sanji' },
        { id: 5, name: 'Tony Chopper' },
        { id: 6, name: 'Nico Robin' },
        { id: 7, name: 'Franky' },
        { id: 8, name: 'Brook' },
        { id: 9, name: 'Jinbe'}
    ]
    let messages = [
        { id: 1, message: 'Hi!' },
        { id: 2, message: 'How are u?' },
        { id: 3, message: 'yo' },
        { id: 4, message: 'yo' },
        { id: 5, message: 'yo' }
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = messages.map(m => <Message message={m.message} />);

    return (
        <div className={s.dialogs} >
            <div className={s.dialogsItems}>
                {
                    dialogsElements
                }
            </div>
            <div className={s.messages}>
                {
                    messagesElements
                }
            </div>
        </div>
    )
}
