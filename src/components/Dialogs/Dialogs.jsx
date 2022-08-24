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
    let dialogsData = [
        { id: 1, name: 'Ksusha' },
        { id: 2, name: 'Misha' },
        { id: 3, name: 'Andrey' },
        { id: 4, name: 'Tolya' },
        { id: 5, name: 'Alina' },
        { id: 6, name: 'Sergey' }
    ]
    let messagesData = [
        { id: 1, message: 'Hi!' },
        { id: 2, message: 'How are u?' },
        { id: 3, message: 'yo' },
        { id: 4, message: 'yo' },
        { id: 5, message: 'yo' }
    ]
    return (
        <div className={s.dialogs} >
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
            </div>
        </div>
    )
}

// export default Dialogs;