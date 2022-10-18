import s from './Dialogs.module.css';
import React from "react";
import { NavLink } from 'react-router-dom';
import { DialogItem } from './DialogItem/DialogItem.jsx'
import { Message } from './Message/Message.jsx'


export const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} photo={dialog.photo} />);
    let messagesElements = props.messages.map(msg => <Message message={msg.message} />);

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
